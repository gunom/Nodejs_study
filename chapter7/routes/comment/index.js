const express = require("express");
const router = express.Router();

router.post("/", require("./commentPOST"));
router.patch("/:id", require("./commentPATCH"));
router.delete("/:id", require("./commentDELETE"));

module.exports = router;
