const Crop =require('../Models/Crops_Collection')


const getCropData = async (req, res) => {
    try {
        const data = await Crop.find({});
        res.json(data);
    } catch (error) {
        console.error('Error fetching agriculture data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const postCropData = async (req, res) => {
    try {
        // Extracting data from req.body
        const {
            name,
            scientific_name,
            season,
            soil_type,
            rainfall_requirement,
            crop_duration,
            yield_per_hectare,
            cultivation_practices
        } = req.body;

        // Create a new crop instance
        const newpostCropData = new Crop({
            name,
            scientific_name,
            season,
            soil_type,
            rainfall_requirement,
            crop_duration,
            yield_per_hectare,
            cultivation_practices,
        });

        // Save the new crop to the database
        await newpostCropData.save();

        return res.status(200).json({ message: "Crop data saved successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to save crop data", error });
    }
};



module.exports = { getCropData,postCropData };
