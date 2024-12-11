const mongoose = require('mongoose');

const fertilizerPesticideSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  product_name: {
    type: String,
    required: true,  
  },
  crop_applicable: {
    type: [String],  
    required: true,
  },
  region: {
    type: [String],  
    required: true,
  },
  recommended_dosage: {
    type: String,
    required: true,  
  },
  organic_chemical: {
    type: String,
    required: true,  
  },
  application_timing: {
    type: String,
    required: true,  
  },
  side_effects: {
    type: String,  
  }
});

module.exports = mongoose.model('FertilizerPesticide', fertilizerPesticideSchema);
