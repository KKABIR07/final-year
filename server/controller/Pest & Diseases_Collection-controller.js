const PestDisease =require('../Models/Pest & Diseases_Collection')


const getPestDiseaseData = async (req, res) => {
    try {
        const data = await PestDisease.find({});
        res.json(data);
    } catch (error) {
        console.error('Error fetching agriculture data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const postPest = async (req, res) => {
    try {
        const { 
            img,
            pest_name, 
            disease_name, 
            affected_crops, 
            prevention_methods, 
            treatment, 
            season_of_occurrence, 
            symptoms 
        } = req.body;

        

        const newPestDisease = new PestDisease({
            img,
            pest_name, 
            disease_name, 
            affected_crops, 
            prevention_methods, 
            treatment, 
            season_of_occurrence, 
            symptoms 
        });

        const savedPestDisease = await newPestDisease.save();
        res.status(201).json(savedPestDisease);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error saving fertilizer data: ${error.message}` });
    }
};

const get_Pest_Byname = async (req, res) => {
    try {
      const pest_name = req.params.pest_name;
      
      const agri = await PestDisease.findOne({ pest_name: pest_name });
      
      if (!agri) {
        return res.status(404).json({ message: "pest_name not found" });
      }
      return res.status(200).json(agri);
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getPestDiseaseData,postPest,get_Pest_Byname };
