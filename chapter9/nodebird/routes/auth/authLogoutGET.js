const express = require("express");

module.exports = async (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
};
