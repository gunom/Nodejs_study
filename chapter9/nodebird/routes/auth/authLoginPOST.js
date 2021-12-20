const express = require("express");
const passport = require("passport");
const User = require("../../models/user");

module.exports = async (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, (logginError) => {
      if (loginError) {
        console.error(logginError);
        return next(logginError);
      }
      return res.redirect("/");
    })(req, res, next);
  });
};
