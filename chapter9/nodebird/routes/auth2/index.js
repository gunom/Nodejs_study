const express = require("express");
const passport = require("passport");
const { isNotLoggedIn, isLoggedIn } = require("../middlewares");
const router = express.Router();

router.post("/join", isNotLoggedIn, require("./authJoinPOST"));
router.post("/login", isNotLoggedIn, require("./authLoginPOST"));
router.post("/logout", isLoggedIn, require("./authLogoutGET"));
router.get("/kakao", passport.authenticate("kakao"));
router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

module.exports = router;
