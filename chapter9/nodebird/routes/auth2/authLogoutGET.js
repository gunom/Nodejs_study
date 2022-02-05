const express = require("express");

module.exports = (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
};
