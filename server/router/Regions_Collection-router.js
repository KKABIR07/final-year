const express = require ("express")
const router= express.Router();
const { getRegionData } = require('../controller/Regions_Collection-controller')



router.route("/RegionData").get(getRegionData);

module.exports = router;