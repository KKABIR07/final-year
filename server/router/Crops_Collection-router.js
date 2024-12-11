const express = require ("express")
const router= express.Router();
const { getCropData ,postCropData,getCrops_collection_Byname} = require('../controller/Crops_Collection-controller')



router.route("/crops-collection").get(getCropData);
router.route("/sendcrop").post(postCropData);
router.route("/crops_Colle_Byname/:name").get(getCrops_collection_Byname);

module.exports = router;