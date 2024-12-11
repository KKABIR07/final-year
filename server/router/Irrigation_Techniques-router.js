const express = require ("express")
const router= express.Router();
const { getIrrigationTechniqueData ,postIrrigationTechniqueData,get_IrrigationTechnique_Byname} = require('../controller/Irrigation_Techniques-controller')



router.route("/IrrigationTechnique").get(getIrrigationTechniqueData);

router.route("/postIrrigationTechnique").post(postIrrigationTechniqueData);

router.route("/Technique_Byname/:technique_name").get(get_IrrigationTechnique_Byname);

module.exports = router;