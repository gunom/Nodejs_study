const express = require("express");
const passport = requrie("passport");
const bcrypt = require("bcrypt");
const User = require("../../models/user");

module.exports = async (req, res, next) => {
  const { email, nick, password } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return res.redirect("/join?error=exist");
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      email,
      nick,
      password: hash,
    });
    return res.redirect("/");
  } catch (err) {
    console.error(err);
    return next(err);
  }
};
