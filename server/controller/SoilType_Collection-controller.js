const SoilType =require('../Models/SoilType_Collection')


const getSoilTypeData = async (req, res) => {
    try {
        const data = await SoilType.find({});
        res.json(data);
    } catch (error) {
        console.error('Error fetching agriculture data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const postSoil = async (req, res) => {
    try {
        const { 
            type_name, 
            properties, 
            water_retention, 
            fertility, 
            suitable_crops, 
            region            
        } = req.body;

        

        const newSoilTypes = new SoilType({
            type_name, 
            properties, 
            water_retention, 
            fertility, 
            suitable_crops, 
            region  
        });

        const savedSoilTypes = await newSoilTypes.save();
        res.status(201).json(savedSoilTypes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error saving fertilizer data: ${error.message}` });
    }
};

module.exports = { getSoilTypeData,postSoil };
