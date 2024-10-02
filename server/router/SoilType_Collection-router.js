const express = require ("express")
const router= express.Router();
const { getSoilTypeData } = require('../controller/SoilType_Collection-controller')



router.route("/SoilTypeData").get(getSoilTypeData);

module.exports = router;