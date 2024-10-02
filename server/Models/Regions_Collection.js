const mongoose = require('mongoose');

const regionSchema = new mongoose.Schema({
  region_name: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  climate: {
    type: String,
    required: true,  
  },
  soil_type: {
    type: String,
    required: true,  
  },
  rainfall_pattern: {
    type: String,
    required: true,  
  },
  temperature_range: {
    min: {
      type: Number,
      required: true,  
    },
    max: {
      type: Number,
      required: true,  
    }
  }
});

module.exports = mongoose.model('Region', regionSchema);
