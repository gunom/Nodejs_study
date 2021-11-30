const User = require("../../models/user");

module.exports = async (req, res, next) => {
  console.log("hi");
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
