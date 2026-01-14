const btn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  icon.src = document.body.classList.contains("dark")
    ? "light.png"
    : "dark.png";
});
