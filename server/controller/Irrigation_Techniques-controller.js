const IrrigationTechnique = require('../Models/Irrigation_Techniques');

const getIrrigationTechniqueData = async (req, res) => {
    try {
        const data = await IrrigationTechnique.find({});
        res.json(data);
    } catch (error) {
        console.error('Error fetching irrigation technique data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const postIrrigationTechniqueData = async (req, res) => {
    try {
        const { 
            img,
            technique_name, 
            suitable_crops, 
            region, 
            water_usage, 
            cost, 
            efficiency,
            Description            
        } = req.body;

        
        const newIrrigationTechnique = new IrrigationTechnique({
            img,
            technique_name, 
            suitable_crops, 
            region, 
            water_usage, 
            cost, 
            efficiency,
            Description   
        });

        const savedIrrigationTechnique = await newIrrigationTechnique.save();
        res.status(201).json(savedIrrigationTechnique);
    } catch (error) {
        console.error('Error saving irrigation technique data:', error);
        res.status(500).json({ message: `Error saving irrigation technique data: ${error.message}` });
    }
};

const get_IrrigationTechnique_Byname = async (req, res) => {
    try {
      const technique_name = req.params.technique_name;
      
      const agri = await IrrigationTechnique.findOne({ technique_name: technique_name });
      
      if (!agri) {
        return res.status(404).json({ message: "technique_name not found" });
      }
      return res.status(200).json(agri);
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getIrrigationTechniqueData, postIrrigationTechniqueData,get_IrrigationTechnique_Byname };
