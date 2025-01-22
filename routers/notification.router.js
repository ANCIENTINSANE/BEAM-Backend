const express = require("express");
const notificationCtrl = require("../controllers/notification.ctrl");

const router = express.Router();

router.get("/:page", notificationCtrl.getNotificationsGv);

module.exports = router;
