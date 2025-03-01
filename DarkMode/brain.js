
const moonPath="M15.5 27.5C15.5 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 15.5 12.3122 15.5 27.5Z";
const sunPath="M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";
let toggle = false;
var object = document.querySelector(".object");
object.addEventListener("click",() =>{
    if(!toggle){
        document.querySelector("path").setAttribute("d",moonPath);
        document.body.style.setProperty("background","black");
        document.querySelector("h1").style.setProperty("color","#e2d3d3");
        setTimeout(rotate,250);
        toggle=true;
    }
    else{
        document.querySelector("path").setAttribute("d",sunPath);
        document.body.style.setProperty("background","#e2d3d3");
        document.querySelector("h1").style.setProperty("color","#000");
        setTimeout(rotateToOg,250);
        toggle=false;
    }
    
});
function rotate(){
    object.style.setProperty("transform","rotate(320deg)");
}
function rotateToOg(){
    object.style.setProperty("transform","rotate(0deg)");
}