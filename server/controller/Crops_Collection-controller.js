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
        
        const {
            img,
            name,
            scientific_name,
            season,
            soil_type,
            rainfall_requirement,
            crop_duration,
            yield_per_hectare,
            cultivation_practices,
            Description
        } = req.body;

       
        const newpostCropData = new Crop({
            img,
            name,
            scientific_name,
            season,
            soil_type,
            rainfall_requirement,
            crop_duration,
            yield_per_hectare,
            cultivation_practices,
            Description
        });

        
        await newpostCropData.save();

        return res.status(200).json({ message: "Crop data saved successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to save crop data", error });
    }
};

const getCrops_collection_Byname = async (req, res) => {
    try {
      const Name = req.params.name;
      
      const agri = await Crop.findOne({ name: Name });
      
      if (!agri) {
        return res.status(404).json({ message: "Crop name not found" });
      }
      return res.status(200).json(agri);
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

module.exports = { getCropData,postCropData,getCrops_collection_Byname };
