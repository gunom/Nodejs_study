const express = require("express");
const router = express.Router();

router.get("/", require("./userGET"));
router.post("/", require("./userPOST"));
router.get("/:userId/comments", require("./usersCommentGET"));

module.exports = router;
