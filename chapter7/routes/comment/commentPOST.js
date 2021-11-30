const Comment = require("../../models/comment");

module.exports = async (req, res, next) => {
  const { id, comment } = req.body;
  try {
    const comment = await Comment.create({
      commenter: req.body.id,
      comment: req.body.comment,
    });
    console.log(comment);
    res.status(201).json(comment);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
