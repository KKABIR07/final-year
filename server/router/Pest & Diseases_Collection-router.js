const express = require ("express")
const router= express.Router();
const { getPestDiseaseData } = require('../controller/Pest & Diseases_Collection-controller')



router.route("/getPestDiseaseData").get(getPestDiseaseData);

module.exports = router;