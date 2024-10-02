const express = require ("express")
const router= express.Router();
const { getFertilizerPesticideData } = require('../controller/Fertilizers & Pesticides_Collection-controller')



router.route("/getFertilizerPesticideData").get(getFertilizerPesticideData);

module.exports = router;