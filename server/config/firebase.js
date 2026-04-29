import admin from 'firebase-admin';

// We initialize using default app if credentials are set via FIREBASE_CREDENTIALS env var
// Or we can parse it from string
export const initFirebaseAdmin = () => {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    try {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
      console.log('Firebase Admin Initialized');
    } catch (err) {
      console.error('Failed to initialize Firebase Admin:', err.message);
    }
  } else {
    console.warn('No FIREBASE_SERVICE_ACCOUNT provided, Firebase Admin is not initialized.');
  }
};

export default admin;
