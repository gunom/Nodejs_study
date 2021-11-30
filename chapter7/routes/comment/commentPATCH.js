const Comment = require("../../models/comment");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { comment } = req.body;
  try {
    const result = await Comment.update(
      {
        comment,
      },
      {
        where: { id },
      }
    );
    res.json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
