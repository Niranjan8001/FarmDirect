import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  firebaseUid: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    sparse: true,
    unique: true
  },
  email: {
    type: String,
    sparse: true,
    unique: true
  },
  name: {
    type: String
  },
  role: {
    type: String,
    default: 'farmer', // could be 'farmer' or 'consumer'
    enum: ['farmer', 'consumer']
  },
  // We can add other fields here based on our mock data needs
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
