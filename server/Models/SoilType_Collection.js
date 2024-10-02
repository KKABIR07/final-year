const mongoose = require('mongoose');

const soilTypeSchema = new mongoose.Schema({
  type_name: {
    type: String,
    required: true,  
  },
  properties: {
    texture: {
      type: String,
      required: true,  
    },
    water_retention: {
      type: String,
      required: true,  
    },
    fertility: {
      type: String,
      required: true,  
    }
  },
  suitable_crops: {
    type: [String],  
  },
  region: {
    type: [String],  
  }
});

module.exports = mongoose.model('SoilType', soilTypeSchema);
