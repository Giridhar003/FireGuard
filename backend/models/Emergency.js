const mongoose = require('mongoose');

const EmergencySchema = new mongoose.Schema({
  incidentType: { type: String, required: true, enum: ['fire', 'medical', 'accident', 'hazmat', 'other'] },
  location: { type: String, required: true },
  coordinates: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: false }
  },
  description: { type: String, required: true },
  casualties: String,
  reporter: String,
  contact: String,
  urgencyLevel: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  mediaFiles: [{
    fileName: String,
    fileType: String,
    data: Buffer
  }],
  status: { type: String, enum: ['pending', 'responding', 'resolved'], default: 'pending' }
}, { timestamps: true });

EmergencySchema.index({ coordinates: '2dsphere' });

module.exports = mongoose.model('Emergency', EmergencySchema); 