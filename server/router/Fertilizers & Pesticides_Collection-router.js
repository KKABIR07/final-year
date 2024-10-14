const express = require ("express")
const router= express.Router();
const { getFertilizerPesticideData,postFertilizer } = require('../controller/Fertilizers & Pesticides_Collection-controller')



router.route("/getFertilizerPesticideData").get(getFertilizerPesticideData);

router.route("/getFertilizerPest").post(postFertilizer);

module.exports = router;