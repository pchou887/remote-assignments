const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const cookieName = req.cookies.name;
  if (!cookieName) {
    res.redirect("../trackName");
  } else {
    res.send(`<h1>Welcome, ${cookieName}!</h1>`);
  }
});

module.exports = router;
