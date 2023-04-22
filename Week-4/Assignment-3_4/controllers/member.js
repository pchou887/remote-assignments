export const member = (req, res) => {
  const user = req.cookies.user;
  if (user) {
    res.render("member", { user: user });
  } else {
    res.redirect("../");
  }
};

export const logout = (req, res) => {
  res.clearCookie("user");
  res.redirect("../");
};
