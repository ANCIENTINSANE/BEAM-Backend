const express = require("express");
const userCtrl = require("../controllers/user.ctrl");

const router = express.Router();

router.post("/login/:usertype", userCtrl.login);
router.post("/signUp", userCtrl.addUser);

module.exports = router;