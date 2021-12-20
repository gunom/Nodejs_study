const express = require("express");
const { isNotLoggedIn, isLoggedIn } = require("../middlewares");
const router = exports.Router();

router.post("/join", isNotLoggedIn, require("./authJoinPOST"));
router.post("/login", isNotLoggedIn, require("./authLoginPOST"));
router.post("/logout", isLoggedIn, require("./authLogoutGET"));
module.exports = router;
