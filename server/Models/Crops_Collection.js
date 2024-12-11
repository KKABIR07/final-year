const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  scientific_name: {
    type: String,
    required: true,
  },
  season: {
    type: String,
    required: true,
  },
  soil_type: {
    type: String,
    required: true,
  },
  // temperature_range: {
  //   min: {
  //     type: Number,
  //     required: true,
  //   },
  //   max: {
  //     type: Number,
  //     required: true,
  //   }
  // },
  rainfall_requirement: {
    type: String,
    required: true,
  },
  crop_duration: {
    type: Number,
    required: true, 
  },
  yield_per_hectare: {
    type: Number,
    required: true, 
  },
  cultivation_practices: {
    type: String,
    required: true,
  },
  Description:{
    type:String,
    required: true,
  }
});

module.exports = mongoose.model('Crop', cropSchema);
