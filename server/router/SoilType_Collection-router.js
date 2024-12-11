const express = require ("express")
const router= express.Router();
const { getSoilTypeData,postSoil,get_Soil_Byname } = require('../controller/SoilType_Collection-controller')



router.route("/SoilTypeData").get(getSoilTypeData);

router.route("/SoilT").post(postSoil);

router.route("/soil_Byname/:type_name").get(get_Soil_Byname);

module.exports = router;