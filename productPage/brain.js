var pic = document.querySelector(".pic");
var pic2 = document.querySelector(".pic2");
var pic3 = document.querySelector(".pic3");
var pic4 = document.querySelector(".pic4");
var container = document.querySelector("#container");
var round = 1,click=0;
container.addEventListener("click",() => {
    if(round == 1){
        pic.classList.replace("left_carousel","bottom_carousel");
        pic2.classList.replace("bottom_carousel","right_carousel");
        pic3.classList.replace("right_carousel","top_carousel");
        pic4.classList.replace("top_carousel","left_carousel");
        container.style.setProperty("background-image","radial-gradient(rgb(255, 255, 255),rgb(192, 146, 28))");
        click=1;
    }
    if(round == 2){
        pic.classList.replace("bottom_carousel","right_carousel");
        pic2.classList.replace("right_carousel","top_carousel");
        pic3.classList.replace("top_carousel","left_carousel");
        pic4.classList.replace("left_carousel","bottom_carousel");
        click=2;
    }
    if(round == 3){
        pic.classList.replace("right_carousel","top_carousel");
        pic2.classList.replace("top_carousel","left_carousel");
        pic3.classList.replace("left_carousel","bottom_carousel");
        pic4.classList.replace("bottom_carousel","right_carousel");
        click=3;
    }
    if(round == 4){
        pic.classList.replace("top_carousel","left_carousel");
        pic2.classList.replace("left_carousel","bottom_carousel");
        pic3.classList.replace("bottom_carousel","right_carousel");
        pic4.classList.replace("right_carousel","top_carousel");
        container.style.setProperty("background-image","radial-gradient(rgb(252, 255, 255),rgb(0, 250, 250))");
        click=4;
    }
     setTimeout(function(){
        if(click==1){
            round=2;
        }
        if(click==2){
            round=3;
        }
        if(click==3){
            round=4;
        }
        if(click==4){
            round=1;
        }
     },100);
});