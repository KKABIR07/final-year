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

module.exports = { getPestDiseaseData };
