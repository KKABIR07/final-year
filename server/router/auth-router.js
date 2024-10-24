const express = require ("express")
const router= express.Router();
const {home,getAgricultureData,getCropsByid,login,register,dist,getCropsByname}=require ('../controller/auth-controller')


router.route("/").get(home);
router.route("/crops").get(getAgricultureData);
router.route("/cropsBydist/:id").get(getCropsByid);

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/dist").post(dist);

router.route("/cropsByname/:District").get(getCropsByname);


module.exports = router;
