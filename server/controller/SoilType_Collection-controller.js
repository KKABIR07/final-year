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

module.exports = { getSoilTypeData };
