var one=0,two=0,three=0,four=0,five=0,six=0,seven=0,eight=0,nine=0,ten=0;
var active;
document.querySelectorAll(".box")[0].addEventListener("click",function(){
    for(var i=0;i<=active;i++)
    {
        document.querySelectorAll(".box")[active].classList.remove("focus");
    }
    console.log("in");
    this.classList.add("focus");
    active=0;
});
document.querySelectorAll(".box")[1].addEventListener("click",function(){
    for(var i=0;i<=active;i++)
    {
        document.querySelectorAll(".box")[active].classList.remove("focus");
    }
    console.log("in");
    this.classList.add("focus");
    active=1;
});
document.querySelectorAll(".box")[2].addEventListener("click",function(){
    for(var i=0;i<=active;i++)
        {
            document.querySelectorAll(".box")[active].classList.remove("focus");
        }
    console.log("in");
    this.classList.add("focus");
    active=2;
});
document.querySelectorAll(".box")[3].addEventListener("click",function(){
    for(var i=0;i<=active;i++)
        {
            document.querySelectorAll(".box")[active].classList.remove("focus");
        }
    console.log("in");
    this.classList.add("focus");
    active=3;
});
document.querySelectorAll(".box")[4].addEventListener("click",function(){
    for(var i=0;i<=active;i++)
        {
            document.querySelectorAll(".box")[active].classList.remove("focus");
        }
    console.log("in");
    this.classList.add("focus");
    active=4;
});
document.querySelectorAll(".box")[5].addEventListener("click",function(){
    for(var i=0;i<=active;i++)
        {
            document.querySelectorAll(".box")[active].classList.remove("focus");
        }
    console.log("in");
    this.classList.add("focus");
    active=5;
});
document.querySelectorAll(".box")[6].addEventListener("click",function(){
    for(var i=0;i<=active;i++)
        {
            document.querySelectorAll(".box")[active].classList.remove("focus");
        }
    console.log("in");
    this.classList.add("focus");
    active=6;
});
document.querySelectorAll(".box")[7].addEventListener("click",function(){
    for(var i=0;i<=active;i++)
        {
            document.querySelectorAll(".box")[active].classList.remove("focus");
        }
    console.log("in");
    this.classList.add("focus");
    active=7;
});
document.querySelectorAll(".box")[8].addEventListener("click",function(){
    for(var i=0;i<=active;i++)
        {
            document.querySelectorAll(".box")[active].classList.remove("focus");
        }
    console.log("in");
    this.classList.add("focus");
    active=8;
});
document.querySelectorAll(".box")[9].addEventListener("click",function(){
    for(var i=0;i<=active;i++)
        {
            document.querySelectorAll(".box")[active].classList.remove("focus");
        }
    console.log("in");
    this.classList.add("focus");
    active=9;
});

document.querySelector(".container").addEventListener("mouseout",function(){
    console.log("in");
    document.querySelectorAll(".box")[active].classList.remove("focus");
})
