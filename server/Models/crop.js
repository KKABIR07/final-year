const mongoose = require('mongoose');


const CropSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    GrowingSeasons: [String],
    Temperature: { type: String },
    SoilType: { type: String },
    Fertilizer: [String],
    Pesticides: [String],
    CommonPestsDiseases: [String],
});


const VegetableSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    GrowingSeasons: [String],
    Temperature: { type: String },
    SoilType: { type: String },
    Fertilizer: [String],
    Pesticides: [String],
    CommonPestsDiseases: [String],
});


const FruitSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    GrowingSeason: [String],
    Temperature: { type: String },
    SoilType: { type: String },
    Fertilizer:  [String],
    Pesticides: [String],
    CommonPestsDiseases: [String],
});


const DistrictSchema = new mongoose.Schema({
    FieldCrops: [CropSchema], 
    Vegetables: [VegetableSchema], 
    Fruits: [FruitSchema], 
});


const AgricultureSchema = new mongoose.Schema({
    District: { type: String, required: true },
    Crops: DistrictSchema
});


// const AgricultureSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     Field_Crops:{

//     },
// });



const Agriculture = mongoose.model('Agriculture', AgricultureSchema);

module.exports = Agriculture;
