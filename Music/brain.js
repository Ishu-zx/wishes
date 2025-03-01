document.querySelector(".logo").addEventListener("click",play);
function play(){
        if(x==true)
        {
            document.querySelector(".audio").play();
            document.querySelector(".logo").classList.toggle("pause");
            x=false;
        }
        else{
            document.querySelector(".audio").pause();
            document.querySelector(".logo").classList.toggle("pause");
            x=true;
        }
}
var x = true;

window.addEventListener("scroll",() =>{
    document.querySelector(".box").classList.add("slider");
    document.body.style.setProperty("color","red");
    console.log("bodyscroll");
});