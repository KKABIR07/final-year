const express = require ("express")
const router= express.Router();
const { getPestDiseaseData,postPest ,get_Pest_Byname} = require('../controller/Pest & Diseases_Collection-controller')



router.route("/getPestDiseaseData").get(getPestDiseaseData);

router.route("/PostPestDisease").post(postPest);

router.route("/pest_Byname/:pest_name").get(get_Pest_Byname);

module.exports = router;