const Region =require('../Models/Regions_Collection')


const getRegionData = async (req, res) => {
    try {
        const data = await Region.find({});
        res.json(data);
    } catch (error) {
        console.error('Error fetching agriculture data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getRegionData };
