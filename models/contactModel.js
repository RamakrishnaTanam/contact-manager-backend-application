const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
 },
  phone: {
    type: String,
    required: true,
  },
  address: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

