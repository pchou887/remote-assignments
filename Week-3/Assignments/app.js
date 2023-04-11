const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));

app.set("view engine", "pug");

// app.use((req, res, next) => {
//   const err = new Error("Oh no!");
//   next(err);
// });

const mainRoutes = require("./routes");
const dataRoutes = require("./routes/data");
const myNameRoutes = require("./routes/myName");
const trackNameRoutes = require("./routes/trackName");

app.use(mainRoutes);
app.use("/data", dataRoutes);
app.use("/myName", myNameRoutes);
app.use("/trackName", trackNameRoutes);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
