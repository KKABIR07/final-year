const mongoose = require('mongoose');

const irrigationTechniqueSchema = new mongoose.Schema({
  technique_name: {
    type: String,
    required: true,  
  },
  suitable_crops: {
    type: [String],  
    required: true,
  },
  region: {
    type: [String],  
    required: true,
  },
  water_usage: {
    type: String,
    required: true, 
  },
  cost: {
    type: Number,
    required: true,  
  },
  efficiency: {
    type: Number,  
    required: true,
  }
});

module.exports = mongoose.model('IrrigationTechnique', irrigationTechniqueSchema);
