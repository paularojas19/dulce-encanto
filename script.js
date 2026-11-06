const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
        siteNav.classList.remove("is-open");
    }
});

const demoForm = document.querySelector("#demo-form");
const formNote = document.querySelector("#form-note");

demoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    demoForm.reset();
    formNote.textContent = "¡Gracias! Esto es solo una demostración: tu mensaje no se envió ni se guardó.";
});
