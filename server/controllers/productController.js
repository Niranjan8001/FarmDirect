import Product from '../models/Product.js';
import sendResponse from '../utils/response.js';

export const createProduct = async (req, res, next) => {
  try {
    const { title, price, category, stock } = req.body;
    const images = req.files ? req.files.map(file => file.path) : [];

    const product = await Product.create({
      farmerId: req.user._id,
      title,
      price,
      category,
      stock,
      images,
    });

    sendResponse(res, 201, true, 'Product created successfully', product);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find().populate('farmerId', 'name location');
    sendResponse(res, 200, true, 'Products fetched successfully', products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate('farmerId', 'name location');
    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }
    sendResponse(res, 200, true, 'Product fetched successfully', product);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }

    if (product.farmerId.toString() !== req.user._id.toString()) {
      res.status(403);
      throw new Error('Not authorized to delete this product');
    }

    await product.deleteOne();
    sendResponse(res, 200, true, 'Product deleted successfully');
  } catch (error) {
    next(error);
  }
};
