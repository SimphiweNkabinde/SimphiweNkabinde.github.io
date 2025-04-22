const menuBtn = document.querySelector("#menu-button");
const navbarItems = document.querySelector("#menu-main");
const theme = localStorage.getItem('theme');
const darkThemeInput = document.querySelector('input[name="color-scheme"][value="dark"]')
const lightThemeInput = document.querySelector('input[name="color-scheme"][value="light"]')



darkThemeInput.addEventListener('change', () => localStorage.setItem(`theme`, darkThemeInput.value))
lightThemeInput.addEventListener('change', () => localStorage.setItem(`theme`, lightThemeInput.value))


if (theme == 'dark') darkThemeInput.click()
else if (theme == 'light') lightThemeInput.click()
else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches && input.value === 'dark') darkThemeInput.click()
    else lightThemeInput.click();
}

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


