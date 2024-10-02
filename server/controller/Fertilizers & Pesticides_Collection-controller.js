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

module.exports = { getFertilizerPesticideData };
