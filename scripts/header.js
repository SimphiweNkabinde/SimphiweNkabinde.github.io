const menuBtn = document.querySelector("#menu-button");
const navbarItems = document.querySelector("#menu-main");
const inputs = document.querySelectorAll('input[name="color-scheme"]');
const theme = localStorage.getItem('theme');



for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener('change', () => localStorage.setItem(`theme`, input.value))
}


for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (input.value === theme) {
        input.click()
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches && input.value === 'dark') {
        input.click()
    } else {
        if (input.value === 'dark') {
            input.click()
        }
    }
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


