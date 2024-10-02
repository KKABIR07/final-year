const express = require ("express")
const router= express.Router();
const { getIrrigationTechniqueData } = require('../controller/Irrigation_Techniques-controller')



router.route("/IrrigationTechnique").get(getIrrigationTechniqueData);

module.exports = router;