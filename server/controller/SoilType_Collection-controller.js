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
            img,
            type_name, 
            properties, 
            water_retention, 
            fertility, 
            suitable_crops, 
            region,
            Description            
        } = req.body;

        

        const newSoilTypes = new SoilType({
            img,
            type_name, 
            properties, 
            water_retention, 
            fertility, 
            suitable_crops, 
            region,
            Description  
        });

        const savedSoilTypes = await newSoilTypes.save();
        res.status(201).json(savedSoilTypes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error saving fertilizer data: ${error.message}` });
    }
};

const get_Soil_Byname = async (req, res) => {
    try {
      const type_name = req.params.type_name;
      
      const agri = await SoilType.findOne({ type_name: type_name });
      
      if (!agri) {
        return res.status(404).json({ message: "pest_name not found" });
      }
      return res.status(200).json(agri);
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
};


module.exports = { getSoilTypeData,postSoil,get_Soil_Byname };
