const FertilizerPesticide =require('../Models/Fertilizers & Pesticides_Collection')


const getFertilizerPesticideData = async (req, res) => {
    try {
        const data = await FertilizerPesticide.find({});
        res.json(data);
    } catch (error) {
        console.error('Error fetching agriculture data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const postFertilizer = async (req, res) => {
    try {
        const { 
            product_name, 
            crop_applicable, 
            region, 
            recommended_dosage, 
            organic_chemical, 
            application_timing, 
            side_effects 
        } = req.body;

        

        const newFertilizer = new FertilizerPesticide({
            product_name,
            crop_applicable,
            region,
            recommended_dosage,
            organic_chemical,
            application_timing,
            side_effects
        });

        const savedFertilizer = await newFertilizer.save();
        res.status(201).json(savedFertilizer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error saving fertilizer data: ${error.message}` });
    }
};


module.exports = { getFertilizerPesticideData,postFertilizer };
