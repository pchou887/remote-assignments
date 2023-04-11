const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { number } = req.query;
  if (!number) {
    res.send("<h1>Lack of Parameter</h1>");
  } else if (!parseInt(number)) {
    res.send("<h1>Wrong Parameter</h1>");
  } else {
    let sum = ((parseInt(number) + 1) * parseInt(number)) / 2;
    res.send(`<h2>${sum}</h2>`);
  }
});

module.exports = router;
