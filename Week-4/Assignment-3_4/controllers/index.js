export const index = (req, res) => {
  const user = req.cookies.user;

  if (!user && req.cookies.errLogin) {
    const err = req.cookies.errLogin;
    res.clearCookie("errLogin");
    res.render("index", { errLogin: err });
  } else if (!user && req.cookies.errRegister) {
    const err = req.cookies.errRegister;
    res.clearCookie("errRegister");
    res.render("index", { errRegister: err });
  } else if (user) {
    res.redirect("./member");
  } else {
    res.render("index");
  }
};
