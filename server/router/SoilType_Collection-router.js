const express = require ("express")
const router= express.Router();
const { getSoilTypeData,postSoil } = require('../controller/SoilType_Collection-controller')



router.route("/SoilTypeData").get(getSoilTypeData);

router.route("/SoilT").post(postSoil);

module.exports = router;