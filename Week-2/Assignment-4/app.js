// 讓新的content box 出現
const show_button = document.querySelector(".button");
const show = document.querySelector(".default-none");

show_button.addEventListener("click", () => {
  show.style.display = show.style.display === "flex" ? "none" : "flex";
});
// 更改 Welcome Message
const welcome_class = document.querySelector(".welcome");
const welcome_change = welcome_class.querySelector("h1");

welcome_class.addEventListener("click", () => {
  welcome_change.textContent = "Have a Good Time!";
});
