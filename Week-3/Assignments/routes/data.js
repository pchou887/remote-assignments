const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { number } = req.query;
  const numberInt = parseInt(number);
  if (!number) {
    res.send("<h1>Lack of Parameter</h1>");
  } else if (!numberInt || numberInt < 0) {
    res.send("<h1>Wrong Parameter</h1>");
  } else {
    let sum = ((numberInt + 1) * numberInt) / 2;
    res.send(`<h2>${sum}</h2>`);
  }
});

module.exports = router;
