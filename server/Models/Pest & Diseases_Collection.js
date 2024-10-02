const mongoose = require('mongoose');

const pestDiseaseSchema = new mongoose.Schema({
  pest_name: {
    type: String,
    required: true,  
  },
  disease_name: {
    type: String,
    required: true,  
  },
  affected_crops: {
    type: [String],  
    required: true,
  },
  prevention_methods: {
    type: String,
    required: true,  
  },
  treatment: {
    type: String,
    required: true, 
  },
  season_of_occurrence: {
    type: String,
    required: true,  
  },
  symptoms: {
    type: String,
    required: true,  
  }
});

module.exports = mongoose.model('PestDisease', pestDiseaseSchema);
