const User = require("../../models/user");
const Comment = require("../../models/comment");

module.exports = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const comments = await Comment.findAll({
      include: {
        model: User,
        where: { id: userId },
      },
    });
    console.log(comments);
    res.json(comments);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
