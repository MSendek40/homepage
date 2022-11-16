let container = document.querySelector(".container");
let button = document.querySelector(".button");
let themeName = document.querySelector(".themeName");



button.addEventListener("click", () => {
    container.classList.toggle("orange");
    if (container.classList.contains("orange")) { themeName.innerText = "niebieski"; }
    else { themeName.innerText = "pomaranczowy" }
}); 
