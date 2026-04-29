import express from 'express';
import User from '../models/User.js';
import admin from '../config/firebase.js';

const router = express.Router();

// Middleware to verify Firebase token
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

// Route to sync user data after Firebase login
router.post('/sync', verifyToken, async (req, res) => {
  try {
    const { uid, phone_number, email, name } = req.user;
    
    // Check if user exists in MongoDB
    let user = await User.findOne({ firebaseUid: uid });
    
    if (user) {
      // Update if any fields have changed (e.g. they linked an email)
      let isUpdated = false;
      if (phone_number && user.phoneNumber !== phone_number) {
        user.phoneNumber = phone_number;
        isUpdated = true;
      }
      if (email && user.email !== email) {
        user.email = email;
        isUpdated = true;
      }
      if (name && user.name !== name) {
        user.name = name;
        isUpdated = true;
      }
      
      if (isUpdated) {
        await user.save();
      }
    } else {
      // Create new user
      user = await User.create({
        firebaseUid: uid,
        phoneNumber: phone_number,
        email: email,
        name: name || 'Farmer'
      });
    }

    res.status(200).json({ message: 'User synced successfully', user });
  } catch (error) {
    console.error('Error syncing user:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
