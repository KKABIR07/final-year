const express = require ("express")
const router= express.Router();
const { getFertilizerPesticideData,postFertilizer,get_Fertilizer_Byname } = require('../controller/Fertilizers & Pesticides_Collection-controller')



router.route("/getFertilizerPesticideData").get(getFertilizerPesticideData);

router.route("/getFertilizerPest").post(postFertilizer);

router.route("/Fertilizer_Byname/:product_name").get(get_Fertilizer_Byname);

module.exports = router;