const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const cookieName = req.cookies.name;
  const { name } = req.query;
  if ((!cookieName && !name) || cookieName) {
    res.redirect("../myName");
  } else {
    res.cookie("name", name);
    res.redirect("../myName");
  }
});

module.exports = router;
