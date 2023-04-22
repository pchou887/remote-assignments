import { getUser, searchUser, createUser } from "./database.js";

export const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const [user] = await getUser(email, password);
    if (user) {
      res.cookie("user", email);
      res.redirect("../member");
    } else if (!email || !password) {
      res.cookie("errLogin", "Please enter Email or Password.");
      res.redirect("../");
    } else {
      res.cookie("errLogin", "Email or Password is wrong.");
      res.redirect("../");
    }
  } catch (err) {
    res.cookie("errLogin", err.sqlMessage);
    console.log(err);
  }
};

export const register = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const [userExist] = await searchUser(email);
    if (!email || !password) {
      res.cookie("errRegister", "Please enter email or password");
      res.redirect("../");
    } else if (userExist) {
      res.cookie("errRegister", "Email is Registered");
      res.redirect("../");
    } else {
      const [user] = await createUser(email, password);
      res.cookie("user", email);
      res.redirect("../member");
      console.log(user);
    }
  } catch (err) {
    res.cookie("errRegister", err.sqlMessage);
    res.redirect("../");
  }
};
