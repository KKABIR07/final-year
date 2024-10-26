const express = require ("express")
const router= express.Router();
const {PostcropImage,getCropsImageByname}=require ('../controller/Image_controller')

router.route("/sendcropImage").post(PostcropImage);

router.route("/GetcropImage/:name").get(getCropsImageByname);

module.exports = router;