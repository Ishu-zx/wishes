const player = document.querySelector(".player");
document.querySelector("#container").addEventListener("click",() =>{
    player.classList.add("jumpUp");
})
function myfun(){
    playerY_axis = playerProperties.top;
    console.log(playerY_axis);
    if(playerY_axis==playerTop){
        player.classList.remove("jumpUp");
    }
}
setInterval(myfun,100);
var playerProperties = getComputedStyle(player);
var playerY_axis;
var playerTop = playerProperties.top;