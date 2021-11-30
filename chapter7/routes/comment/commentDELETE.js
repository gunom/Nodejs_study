const Comment = require("../../models/comment");

module.exports = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await Comment.destroy({
      where: {
        id,
      },
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
