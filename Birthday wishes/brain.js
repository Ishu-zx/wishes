var page2 = document.querySelector(".page2");
var backface = document.querySelector(".backface");
var container = document.querySelector(".container");
page2.addEventListener("click",() =>{
    page2.classList.toggle("rotate_page2");
    backface.classList.toggle("rotate_page2");
    container.classList.toggle("rotate_container");
});
backface.addEventListener("click",() =>{
    page2.classList.toggle("rotate_page2");
    backface.classList.toggle("rotate_page2");
    container.classList.toggle("rotate_container");
});
