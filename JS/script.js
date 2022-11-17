let container = document.querySelector(".container");
let button = document.querySelector(".button");
let themeName = document.querySelector(".themeName");


button.addEventListener("click", () => {
    container.classList.toggle("orange");

themeName.innerText=container.classList.contains("orange")? "jasne" : "pomaranczowe"

   
}); 
