const menuBtn = document.querySelector("#menu-button");
const navbarItems = document.querySelector("#menu-main");

menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded");
    if (expanded === "true") {
        navbarItems.classList.remove("expanded");
        menuBtn.setAttribute("aria-expanded", "false");
    } else {
        navbarItems.classList.add("expanded");
        menuBtn.setAttribute("aria-expanded", "true");
    }
})
