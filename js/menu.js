let show = true;

const menuNav = document.querySelector(".nav-links");
const menuToggle = menuNav.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuNav.classList.toggle("on", show);
    show = !show;
});
