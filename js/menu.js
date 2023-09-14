let show = true;

const menuNav = document.querySelector(".nav-links");
const menuToggle = menuNav.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    menuNav.classList.toggle("on", show);
    show = !show;
});
