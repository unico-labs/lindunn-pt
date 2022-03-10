const navbar = document.querySelector("aside");
const menu = document.querySelector("#menu-hamburguer");

navbar.style.display = "none";

const handleMenu = () => {
  navbar.style.display = navbar.style.display === "none" ? "flex" : "none";
};

document.addEventListener(
  "click",
  function (event) {
    if (event.target.hasAttribute("href")) {
      handleMenu();
      menu.checked = !menu.checked;
    }
  },
  false
);
