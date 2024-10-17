const express = require ("express")
const router= express.Router();
const { getPestDiseaseData,postPest } = require('../controller/Pest & Diseases_Collection-controller')



router.route("/getPestDiseaseData").get(getPestDiseaseData);

router.route("/PostPestDisease").post(postPest);

module.exports = router;