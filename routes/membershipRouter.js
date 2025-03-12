const express = require("express");
const router = express.Router();
const membershipController = require("../controller/membershipcontroller.js");

router.post("/seed", membershipController.createMembership);
router.get("/", membershipController.getAllMemberships);

module.exports = router;
