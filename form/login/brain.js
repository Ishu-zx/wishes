// #########################input filll
var fill;
fill=document.querySelector("input").value;
/* add fill */
document.querySelector("#email").addEventListener("keyup",function(){
    fill=document.querySelector("#email").value;
    console.log(fill);
    if(fill!=""){
        document.querySelector(".email").classList.add("fill");
    }
});
document.querySelector("#password").addEventListener("keyup",function(){
    fill=document.querySelector("#password").value;
    console.log(fill);
    if(fill!=""){
        console.log("in");
        document.querySelector(".password").classList.add("fill");
    }
});
document.querySelector("#firstName").addEventListener("keyup",function(){
    fill=document.querySelector("#firstName").value;
    console.log(fill);
    if(fill!=""){
        console.log("in");
        document.querySelector(".fname").classList.add("fill");
    }
});
document.querySelector("#lastName").addEventListener("keyup",function(){
    fill=document.querySelector("#lastName").value;
    console.log(fill);
    if(fill!=""){
        console.log("in");
        document.querySelector(".lname").classList.add("fill");
    }
});
document.querySelector("#email2").addEventListener("keyup",function(){
    fill=document.querySelector("#email2").value;
    console.log(fill);
    if(fill!=""){
        console.log("in");
        document.querySelector(".email2").classList.add("fill");
    }
});
document.querySelector("#userName").addEventListener("keyup",function(){
    fill=document.querySelector("#userName").value;
    console.log(fill);
    if(fill!=""){
        console.log("in");
        document.querySelector(".username").classList.add("fill");
    }
});
document.querySelector("#password2").addEventListener("keyup",function(){
    fill=document.querySelector("#password2").value;
    console.log(fill);
    if(fill!=""){
        console.log("in");
        document.querySelector(".password2").classList.add("fill");
    }
});
document.querySelector("#confirm-password").addEventListener("keyup",function(){
    fill=document.querySelector("#confirm-password").value;
    console.log(fill);
    if(fill!=""){
        console.log("in");
        document.querySelector(".confirm-password").classList.add("fill");
    }
});

/* remove fill */
document.querySelector("body").addEventListener("click",function(){
    fill=document.querySelector("#email").value;
    console.log("fill:"+fill);
    if(fill==""){
        document.querySelector(".email").classList.remove("fill");
    }
});
document.querySelector("body").addEventListener("click",function(){
    fill=document.querySelector("#password").value;
    console.log("fill:"+fill);
    if(fill==""){
        document.querySelector(".password").classList.remove("fill");
    }
});
document.querySelector("body").addEventListener("click",function(){
    fill=document.querySelector("#firstName").value;
    console.log("fill:"+fill);
    if(fill==""){
        document.querySelector(".fname").classList.remove("fill");
    }
});
document.querySelector("body").addEventListener("click",function(){
    fill=document.querySelector("#lastName").value;
    console.log("fill:"+fill);
    if(fill==""){
        document.querySelector(".lname").classList.remove("fill");
    }
});
document.querySelector("body").addEventListener("click",function(){
    fill=document.querySelector("#email2").value;
    console.log("fill:"+fill);
    if(fill==""){
        document.querySelector(".email2").classList.remove("fill");
    }
});
document.querySelector("body").addEventListener("click",function(){
    fill=document.querySelector("#userName").value;
    console.log("fill:"+fill);
    if(fill==""){
        document.querySelector(".username").classList.remove("fill");
    }
});
document.querySelector("body").addEventListener("click",function(){
    fill=document.querySelector("#password2").value;
    console.log("fill:"+fill);
    if(fill==""){
        document.querySelector(".password2").classList.remove("fill");
    }
});
document.querySelector("body").addEventListener("click",function(){
    fill=document.querySelector("#confirm-password").value;
    console.log("fill:"+fill);
    if(fill==""){
        document.querySelector(".confirm-password").classList.remove("fill");
    }
    console.log(fill);
});

// ######################### end input fill ##########################################################################

// ########################## slider scripting ########################

var rInput=document.querySelectorAll(".register input");
document.querySelector(".register-btn").addEventListener("click",function(){
    document.querySelector(".slider").classList.add("slide");
    document.querySelector("body").style.setProperty("background-color","var(--themeColor)");
    for(var i=0;i<rInput.length;i++)
    rInput[i].disabled=false;
    for(var j=0;j<2;j++)
        document.querySelectorAll(".login input")[j].disabled=true;
});
document.querySelector(".login-btn").addEventListener("click",function(){
    document.querySelector(".slider").classList.remove("slide");
    document.querySelector("body").style.setProperty("background-color","var(--themeColor2)");
    for(var i=0;i<rInput.length;i++)
        rInput[i].disabled=true;
    
        for(var j=0;j<2;j++)
            document.querySelectorAll(".login input")[j].disabled=false;
});

// ################## end slider scripting ###########################

// ############# password scripting #######################
/* pwd compare */
var pwd;
var confirmPwd;
document.querySelector(".register button").addEventListener("click",function(){
    pwd=document.querySelector("#password2").value;
    confirmPwd=document.querySelector("#confirm-password").value;
    console.log("pwd:"+pwd);
    console.log("confirmPwd:"+confirmPwd);
    if(pwd!=confirmPwd){
        alert("Password is not match");      
    }
})

/* pwd visibility */
var toggle=0;
document.querySelector(".eye").addEventListener("click",function(){
    if(toggle==0){
        document.querySelector("#password").type="text";
        document.querySelector(".eye").classList.replace("fa-eye","fa-eye-slash");
        toggle=1;
    }
    else{
        document.querySelector("#password").type="password";
        document.querySelector(".eye").classList.replace("fa-eye-slash","fa-eye");
        toggle=0;
    }
});
var toggle2=0;
document.querySelector(".password2-box .eye").addEventListener("click",function(){
    if(toggle2==0){
        document.querySelector("#password2").type="text";
        document.querySelector(".password2-box .eye").classList.replace("fa-eye","fa-eye-slash");
        toggle2=1;
    }
    else{
        console.log("in");
        document.querySelector("#password2").type="password";
        document.querySelector(".password2-box .eye").classList.replace("fa-eye-slash","fa-eye");
        toggle2=0;
    }
});
var toggle3=0;
document.querySelector(".confirm-password-box .eye").addEventListener("click",function(){
    if(toggle3==0){
        document.querySelector("#confirm-password").type="text";
        document.querySelector(".confirm-password-box .eye").classList.replace("fa-eye","fa-eye-slash");
        toggle3=1;
    }
    else{
        console.log("in");
        document.querySelector("#confirm-password").type="password";
        document.querySelector(".confirm-password-box .eye").classList.replace("fa-eye-slash","fa-eye");
        toggle3=0;
    }
});

/* end password scripting */

/* ############################# media query ################### */

document.querySelector(".register-btn2").addEventListener("click",function(){
    document.querySelector(".login").style.setProperty("display","none");
    document.querySelector("body").style.setProperty("background-color","var(--themeColor)");
    document.querySelector(".register").style.setProperty("display","flex");

    for(var i=0;i<rInput.length;i++)
        rInput[i].disabled=false;
});
document.querySelector(".login-btn2").addEventListener("click",function(){
    document.querySelector(".register").style.setProperty("display","none");
    document.querySelector("body").style.setProperty("background-color","var(--themeColor2)");
    document.querySelector(".login").style.setProperty("display","flex");

});