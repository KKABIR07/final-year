const IrrigationTechnique =require('../Models/Irrigation_Techniques')


const getIrrigationTechniqueData = async (req, res) => {
    try {
        const data = await IrrigationTechnique.find({});
        res.json(data);
    } catch (error) {
        console.error('Error fetching agriculture data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getIrrigationTechniqueData };
