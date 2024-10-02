const express = require ("express")
const router= express.Router();
const { getCropData ,postCropData} = require('../controller/Crops_Collection-controller')



router.route("/crops-collection").get(getCropData);
router.route("/sendcrop").post(postCropData)

module.exports = router;