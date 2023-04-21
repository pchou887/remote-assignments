import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { searchUser, getUser, createUser } from "./database.js";
import dotenv from "dotenv";
const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  const user = req.cookies.user;
  if (!user) {
    res.render("index");
  } else {
    res.redirect("./member");
  }
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const [user] = await getUser(email, password);
    console.log(user);
    if (user) {
      res.cookie("user", email);
      res.redirect("../member");
    } else if (!email || !password) {
      res.render("index", { signinMessage: "Please enter Email or Password." });
    } else {
      res.render("index", { signinMessage: "Email or Password is wrong." });
    }
  } catch (err) {
    res.send("Error! Please enter right Email or Password.");
    console.log(err);
  }
});

app.post("/register", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const [userExist] = await searchUser(email);
    if (!email || !password) {
      res.render("index", { signupMessage: "Please enter email or password" });
    } else if (userExist) {
      res.render("index", { signupMessage: "Email is Registered" });
    } else {
      const [user] = await createUser(email, password);
      res.cookie("user", email);
      res.redirect("../member");
      console.log(user);
    }
  } catch (err) {
    res.render("index", { signupMessage: err.sqlMessage });
    console.log(err.sqlMessage);
  }
});

app.get("/member", (req, res) => {
  const user = req.cookies.user;
  if (user) {
    res.render("member", { user: user });
  } else {
    res.redirect("../");
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("user");
  res.redirect("../");
});

app.listen(8000, () => {
  console.log("Sever is running on port 8000");
});
