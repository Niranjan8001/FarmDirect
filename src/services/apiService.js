/**
 * Robust API Service for FarmDirect
 * Handles:
 * - Environment-based Base URL
 * - Automatic Retries with Exponential Backoff
 * - Request Timeouts
 * - Centralized Error Handling
 * - Response Validation
 */

const getBaseUrl = () => {
  // Priority 1: Environment variable from Vite
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl) return envUrl.replace(/\/$/, ''); // Remove trailing slash

  // Priority 2: Auto-detect environment
  const isProd = import.meta.env.PROD;
  if (isProd) {
    // If production but VITE_API_URL is missing, we might be on Vercel
    // and need to use the production backend URL if known, or fallback gracefully.
    console.warn('VITE_API_URL is missing in production environment!');
    return 'https://farmdirect-backend.onrender.com/api'; // Example fallback production URL
  }

  // Priority 3: Local development fallback
  return 'http://localhost:5000/api';
};

const API_BASE_URL = getBaseUrl();
const DEFAULT_TIMEOUT = 8000; // 8 seconds
const MAX_RETRIES = 2;

/**
 * Custom Error class for API failures
 */
class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
    this.isNetworkError = !status;
  }
}

/**
 * Validates the URL format before making a call
 */
const validateUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    console.error('Invalid API URL:', url);
    return false;
  }
};

/**
 * Robust fetch wrapper with timeout and retries
 */
const fetchWithRetry = async (endpoint, options = {}, retries = MAX_RETRIES, backoff = 500) => {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;
  
  if (!validateUrl(url)) {
    throw new ApiError('Invalid API configuration. Please check your environment variables.', 0);
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), options.timeout || DEFAULT_TIMEOUT);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    clearTimeout(timeoutId);

    // Handle non-200 responses
    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        errorData = { message: `HTTP Error ${response.status}` };
      }
      throw new ApiError(errorData.message || 'Server error', response.status, errorData);
    }

    // Handle empty responses
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return { success: true, data: null };
    }

    const result = await response.json();
    
    // Basic data validation
    if (result === null || typeof result !== 'object') {
      throw new ApiError('Invalid response format from server', 500);
    }

    return result;

  } catch (error) {
    clearTimeout(timeoutId);

    // Handle Timeout / Abort
    if (error.name === 'AbortError') {
      if (retries > 0) {
        console.warn(`Request timed out. Retrying... (${MAX_RETRIES - retries + 1})`);
        await new Promise(resolve => setTimeout(resolve, backoff));
        return fetchWithRetry(endpoint, options, retries - 1, backoff * 2);
      }
      throw new ApiError('Request timed out after multiple attempts.', 408);
    }

    // Handle Network Failures
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      if (retries > 0) {
        console.warn(`Network error. Retrying... (${MAX_RETRIES - retries + 1})`);
        await new Promise(resolve => setTimeout(resolve, backoff));
        return fetchWithRetry(endpoint, options, retries - 1, backoff * 2);
      }
      throw new ApiError('Cannot connect to the server. Please check your internet connection or backend status.', 0);
    }

    // Rethrow ApiErrors or wrap generic errors
    if (error instanceof ApiError) throw error;
    throw new ApiError(error.message || 'An unexpected error occurred', 500);
  }
};

/**
 * Centralized API Service
 */
export const apiService = {
  getProducts: async () => {
    return fetchWithRetry('/products');
  },

  getProductsByFarmer: async (farmerId) => {
    return fetchWithRetry(`/products?farmerId=${farmerId}`);
  },

  addProduct: async (productData, token) => {
    return fetchWithRetry('/products', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(productData)
    });
  },

  // Add more API methods as needed
  checkHealth: async () => {
    try {
      await fetchWithRetry('/health', { timeout: 3000 });
      return true;
    } catch (e) {
      return false;
    }
  }
};
