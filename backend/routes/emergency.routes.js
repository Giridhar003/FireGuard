// Import necessary modules
const express = require('express');
const router = express.Router();
const Emergency = require('../models/Emergency');

// POST /api/emergencies
router.post('/', async (req, res) => {
  try {
    const {
      incidentType, location, latitude, longitude, description,
      casualties, reporter, contact, urgencyLevel, mediaFiles // mediaFiles is an array of {fileName, fileType, data}
    } = req.body;

    // Convert base64 to Buffer if needed
    const processedMediaFiles = (mediaFiles || []).map(file => ({
      fileName: file.fileName,
      fileType: file.fileType,
      data: Buffer.from(file.data, 'base64')
    }));

    const emergency = await Emergency.create({
      incidentType,
      location,
      coordinates: {
        type: 'Point',
        coordinates: [parseFloat(longitude), parseFloat(latitude)]
      },
      description,
      casualties,
      reporter,
      contact,
      urgencyLevel,
      mediaFiles: processedMediaFiles
    });

    res.status(201).json({ success: true, data: emergency });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/emergencies - return all emergencies
router.get('/', async (req, res) => {
  try {
    const emergencies = await Emergency.find().sort('-createdAt');
    res.json({ success: true, data: emergencies });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;