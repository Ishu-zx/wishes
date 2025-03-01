// utility class
var zero0=0,on1=1,two2=2,three3=3,four4=4,five5=5,six6=6,seven7=7,eight8=8,nine9=9,r=0;
var first=0,num,dott=0;
var plusTemp = [],plusInc=0,plusStore=0;
plusTemp[0]=0;
var minusTemp = [],minusInc=0,minus1=-1;
minusTemp[0]=0;
var multiTemp = new Array(),multiInc=0,multiStore=1,multiStore2=1;
var dvdTemp=[],dvdInc=0, dvdStore=1;
var isDvd=0,isDvd2=0,isDvd3=0;
var numActive=0;
var isMultiply=0,isMultiply2=0,isMultiply3=0,isMinus2=0;
var count=0,perStore=[],perInc=0,pS=0;
var rough=0;
function disActiveKeys(){
    console.log("isPlus:"+isPlus);
    console.log("isPlus2:"+isPlus2);
    console.log("isPlus3:"+isPlus3);
    console.log("isMinus:"+isMinus);
    console.log("isMinus2:"+isMinus2);
    console.log("isMinus3:"+isMinus3);
    console.log("isMultiply:"+isMultiply);
    console.log("isMultiply2:"+isMultiply2);
    console.log("isMultiply3:"+isMultiply3);
    console.log("isDvd:"+isDvd);
    console.log("isDvd2:"+isDvd2);
    console.log("isDvd3:"+isDvd3);
}
function showValue(){
    for(var p=0;p<plusInc;p++){
        console.log("plus["+p+"]:"+plusTemp[p]);
    }
    for(var m=0;m<minusInc;m++){
        console.log("minus["+m+"]:"+minusTemp[m]);
    }
}
function operations(){
    if(isPlus==1){
        num=parseFloat(r);
        first=first+num;
    }
    if(isMinus==1){
        num=parseFloat(r);
        first=first-num;
    }
    if(isMultiply==1){
        if(isMinus==1){
            r=r*minus1;
            isMinus=0;
        }
        multiTemp[multiInc]=parseFloat(r);
        multiStore=multiStore*multiTemp[multiInc];
    }
    if(isDvd==1){
        if(isMinus==1){
            r=r*minus1;
            isMinus=0;
        }
        dvdTemp[dvdInc]=parseFloat(r);
        dvdStore=dvdTemp[dvdInc]/dvdStore;
    }
}
// for zero
document.getElementById("zero").addEventListener("click",zero);
function zero(){
    var displayValue=document.createElement('h1');
    displayValue.innerHTML=0;
    document.querySelector(".display").appendChild(displayValue);
    r=""+r+zero0;
    console.log(r);
    numActive=1;
    count++;
    backActive=0;
}

// for one
var isOne=0;
document.getElementById("one").addEventListener("click",one);
function one(){
    var displayValue=document.createElement('h1');
    displayValue.innerHTML=1;
    document.querySelector(".display").appendChild(displayValue);
    r=""+r+on1;
    console.log(r);
    numActive=1;
    count++;
    backActive=0;
}

// for two
document.getElementById("two").addEventListener("click",two);
function two(){
    var displayValue=document.createElement('h1');
    displayValue.innerHTML=2;
    document.querySelector(".display").appendChild(displayValue);
    r=""+r+two2;
    console.log(r);
    numActive=1;
    count++;
    backActive=0;
}
// for three
document.getElementById("three").addEventListener("click",three);
function three(){
    var displayValue=document.createElement('h1');
    displayValue.innerHTML=3;
    document.querySelector(".display").appendChild(displayValue);
    r=""+r+three3;
    console.log(r);
    numActive=1;
    count++;
    backActive=0;
}

// for four
document.getElementById("four").addEventListener("click",four);
function four(){
    var displayValue=document.createElement('h1');
    displayValue.innerHTML=4;
    document.querySelector(".display").appendChild(displayValue);
    r=""+r+four4;
    console.log(r);
    numActive=1;
    count++;
    backActive=0;
}

// for five
document.getElementById("five").addEventListener("click",five);
function five(){
    var displayValue=document.createElement('h1');
    displayValue.innerHTML=5;
    document.querySelector(".display").appendChild(displayValue);
    r=""+r+five5;
    console.log(r);
    numActive=1;
    count++;
    backActive=0;
}

// for six
document.getElementById("six").addEventListener("click",six);
function six(){
    var displayValue=document.createElement('h1');
    displayValue.innerHTML=6;
    document.querySelector(".display").appendChild(displayValue);
    r=""+r+six6;
    console.log(r);
    numActive=1;
    count++;
    backActive=0;
}

// for seven
document.getElementById("seven").addEventListener("click",seven);
function seven(){
    var displayValue=document.createElement('h1');
    displayValue.innerHTML=7;
    document.querySelector(".display").appendChild(displayValue);
    r=""+r+seven7;
    console.log(r);
    numActive=1;
    count++;
    backActive=0;
}

// for eight
document.getElementById("eight").addEventListener("click",eight);
function eight(){
    var displayValue=document.createElement('h1');
    displayValue.innerHTML=8;
    document.querySelector(".display").appendChild(displayValue);
    r=""+r+eight8;
    console.log(r);
    numActive=1;
    count++;
    backActive=0;
}

// for nine
document.getElementById("nine").addEventListener("click",nine);
function nine(){
    var displayValue=document.createElement('h1');
    displayValue.innerHTML=9;
    document.querySelector(".display").appendChild(displayValue);
    r=""+r+nine9;
    console.log(r);
    numActive=1;
    count++;
    backActive=0;
}
// for dot
document.getElementById("dot").addEventListener("click",dot);
function dot(){
    if(dott==0){
    var displayValue=document.createElement('h1');
    displayValue.innerHTML=".";
    document.querySelector(".display").appendChild(displayValue);
    r=""+r+".";
    console.log(r);
    }
    dott++;
    backActive=0;
}


// ######################  operations  ##########################
// for plus
var rTemp;
var isPlus=0,isPlus2=0,isPlus3=0;
document.getElementById("plus").addEventListener("click",plus);
function plus(){
    var displayValue=document.createElement('h1');
    displayValue.innerHTML="+";
    document.querySelector(".display").appendChild(displayValue);
    perStore[perInc]=parseFloat(r);
    perInc++
    count=0;
    rTemp=r;
    if(backActive==1){
        plusTemp[plusInc]=operationTemp;
    }
    else{
        if(isMultiply==1){
            if(isMinus==1){
                r=r*minus1;
                num=parseFloat(r);
                first=first+num;
                plusTemp[plusInc]=first;
                console.log(plusTemp[0]);
            }
            else{
                multiTemp[multiInc]=parseFloat(r);
                multiStore=multiStore*multiTemp[multiInc];
                plusTemp[plusInc]=multiStore;
                multiStore=1;
                console.log(multiStore);
                r=0;
                multiInc++;
                isMultiply=2;
                console.log("is:"+isMultiply);
            }
        }
        else if(isDvd==1){
            if(isMinus==1){
                r=r*minus1;
                num=parseFloat(r);
                first=first+num;
                plusTemp[plusInc]=first;
                console.log(plusTemp[0]);
            }
            else{
                dvdTemp[dvdInc]=parseFloat(r);
                dvdStore=dvdStore/dvdTemp[dvdInc];
                plusTemp[plusInc]=dvdStore;
                dvdStore=1;
                r=0;
                dvdInc++;
                console.log("is:"+isDvd);
                isDvd=2;
            }
        }
        else{
            if(isMultiply!=1&&isMultiply2==1){
                if(isMinus3==1){
                    r=r*minus1;
                }
                plusTemp[plusInc]=parseFloat(r);
                isMultiply=2;
            }
            else if(isDvd!=1&&isDvd2==1){
                if(isMinus3==1){
                    r=r*minus1;
                }
                plusTemp[plusInc]=parseFloat(r);
                isDvd=2;
            }
            else if(isMinus==1){
                if(isMinus2==2){
                    r=r*minus1;
                    num=parseFloat(r);
                    first=first+num;
                    plusTemp[plusInc]=first;
                    console.log(plusTemp[0]);
                }
                else{
                    num=parseFloat(r);
                    first=first-num;
                }
            }
            else{
                if(isPlus==0){
                    plusTemp[plusInc]=parseFloat(r);
                    num=parseFloat(r);
                    first=first+num;
                }
                else{
                    operations();
                }
            }
        }
    }
    console.log(plusTemp[plusInc]);
    r=0;
    isPlus=1;
    isPlus2=1;
    isPlus3=1;
    plusInc++;
    plusTemp[plusInc]=0;// bcoz of garbage value
    isMinus=0;
    isDvd3=0;
    isMultiply3=0;
    isMinus3=0;
    numActive=0;
    backActive=0;
}
// for minus
var isMinus=0,isMinus3=0;
document.getElementById("minus").addEventListener("click",minus);
function minus(){
    disActiveKeys();
    var displayValue=document.createElement('h1');
    displayValue.innerHTML="-";
    document.querySelector(".display").appendChild(displayValue);
    perStore[perInc]=parseFloat(r);
    console.log(perStore[perInc]);
    perInc++
    count=0;
    rTemp=r;
    if(isMultiply==1){
        multiTemp[multiInc]=parseFloat(r);
        multiStore=multiStore*multiTemp[multiInc];
        minusTemp[minusInc]=multiStore;
        multiStore=1;
        console.log(minusTemp[minusInc]);
        r=0;
        isMultiply=2;
        multiInc++;
        
    }
    else if(isDvd==1){
        dvdTemp[dvdInc]=parseFloat(r);
        dvdStore=dvdStore/dvdTemp[dvdInc];
        minusTemp[minusInc]=dvdStore;
        dvdStore=1;
        r=0;
        multiInc++;
        isDvd=2;
    }
    else{
        if(isMultiply!=1&&isMultiply2==1){
            minusTemp[minusInc]=parseFloat(r);
            isMultiply=2;
        }
        else if(isDvd!=1&&isDvd2==1){
            minusTemp[minusInc]=parseFloat(r);
            isDvd=2;
            r=0;
        }
        else if(isPlus==1){
            plusTemp[plusInc]=parseFloat(r);
            num=parseFloat(r);
            first=first+num;
            isPlus=0;
            plusInc++;
        }
        else{
            if(isMinus==0){
                minusTemp[minusInc]=parseFloat(r);
                num=parseFloat(r);
                first=num-first;
            }
            else{
                operations();
            }
        }
    }
    console.log(minusTemp[minusInc]);
    r=0;
    isMinus=1;
    isMinus2=1;
    isMinus3=1;
    minusInc++;
    minusTemp[minusInc]=0;//bcoz of garbage value
    isDvd3=0;
    isMultiply3=0;
    isPlus3=0;
    numActive=0;
    backActive=0;
}

// for divide 
document.getElementById("divide").addEventListener("click",divide);
function divide(){
    var displayValue=document.createElement('h1');
    displayValue.innerHTML="/";
    document.querySelector(".display").appendChild(displayValue);
    rTemp=r;
    if(isDvd==0||isDvd==2){
        if(isMinus==1){
            r=r*minus1;
            isMinus=0;
        }
        dvdTemp[dvdInc]=parseFloat(r);
        dvdStore=dvdTemp[dvdInc]/dvdStore;
        console.log(dvdStore);
    }
    else{
        operations();
    }
    if(isMultiply==1&&(isPlus2==1||isMinus2==1)){
        isMultiply=0;
    }
    count=0;
    isDvd=1;
    isDvd2=1;
    isDvd3=1;
    r=0;
    dvdInc++;
    isMultiply3=0;
    isPlus3=0;
    isMinus3=0;
    numActive=0;
    backActive=0;
}
// for multiply
document.getElementById("multiply").addEventListener("click",multiply);
function multiply(){
    var displayValue=document.createElement('h1');
    displayValue.innerHTML="*";
    document.querySelector(".display").appendChild(displayValue);
    rTemp=r;
    if(isDvd==1&&isPlus!=1&&isMinus!=1){
        dvdTemp[dvdInc]=parseFloat(r);
        dvdStore=dvdStore/dvdTemp[dvdInc];
        multiStore=dvdStore;
        r=0;
        dvdStore=1;
        dvdInc++;
        isDvd=0;
        console.log(multiTemp[multiInc]);
    }
    else if(isMultiply==0||isMultiply==2){
        if(isMinus==1){
            r=r*minus1;
            isMinus=0;
        }
        multiTemp[multiInc]=parseFloat(r);
        multiStore=multiTemp[multiInc]*multiStore;
        console.log(multiStore);
    }
    else{
        operations();
    }
    if(isDvd==2){
        isDvd=1;
    }
    count=0;
    isMultiply=1;
    isMultiply2=1;
    isMultiply3=1;
    r=0;
    multiInc++;
    isDvd3=0;
    isPlus3=0;
    isMinus3=0;
    numActive=0;
    backActive=0;
}

// for percentage
document.getElementById("percentage").addEventListener("click",percentage);
function percentage(){
    if(isPlus3==1||isMinus3==1){ 
        for(var per=0;per<perInc;per++){
            pS=pS+perStore[per];
        }
        r=parseFloat(r);
        console.log(r);
        r=(pS*r)/100;
        var list=document.querySelector(".display");
        for(var clr=1;clr<count;clr++){
            list.removeChild(list.lastChild);
        }
        list.lastChild.innerHTML=r;
        pS=0;
    }
    else{
        r=parseFloat(r);
        r=r/100;
        document.querySelector(".display").lastChild.innerHTML=r;
    }
    backActive=0;
}
// for equalto
document.getElementById("equal").addEventListener("click",equal);
function equal(){
    showValue();
    disActiveKeys();
    var d;
    d=isDvd;
    if(isMultiply3==1){
        isDvd=0;
        if(isMinus2==1){
            isMinus=1;
        }
        if(isPlus2==1){
            isPlus=1;
        }
    }
    if(isDvd3==1){
        isMultiply=0;
        if(isMinus2==1)
        {
            isMinus=1;
        }
        if(isPlus2==1){
            isPlus=1;
        }
    }
    if(isMultiply==1&&isMinus==0&&isPlus==0){
        multiTemp[multiInc]=parseFloat(r);
        multiStore=multiStore*multiTemp[multiInc];
        first=multiStore;
        r=0;
    }
    else if(isDvd==1&&isMinus==0&&isPlus==0){
        dvdTemp[dvdInc]=parseFloat(r);
        dvdStore=dvdStore/dvdTemp[dvdInc];
        first=dvdStore;
        r=0;
    }
    else{
        var isActive=0;
        if(isMultiply==1&&isMinus!=1){
            multiTemp[multiInc]=parseFloat(r);
            multiStore=multiStore*multiTemp[multiInc];
            plusTemp[plusInc]=multiStore;
            first=multiStore;
            r=0;
        }
        if(isMultiply==1&&isPlus!=1){
            if(isMinus3==1)
            r=r*minus1;
            multiTemp[multiInc]=parseFloat(r);
            multiStore=multiStore*multiTemp[multiInc];
            minusTemp[minusInc]=multiStore;
            first=multiStore;
            r=0;
        }
        if(isMultiply==1&&isPlus==1&&isMinus==1){
            multiTemp[multiInc]=parseFloat(r);
            multiStore=multiStore*multiTemp[multiInc];
            plusTemp[plusInc]=multiStore;
            r=0;
            isActive=1;
        }
        // divide
        if(isPlus3==1||isMinus3==1){
            isDvd=0;
        }
        if(isDvd==1&&isMinus!=1){
            dvdTemp[dvdInc]=parseFloat(r);
            dvdStore=dvdStore/dvdTemp[dvdInc];
            plusTemp[plusInc]=dvdStore;
            first=dvdStore;
            r=0;
            console.log(plusTemp[plusInc]);
        }
        if(isDvd==1&&isPlus!=1){
            if(isMinus3==1)
            r=r*minus1;
            dvdTemp[dvdInc]=parseFloat(r);
            dvdStore=dvdStore/dvdTemp[dvdInc];
            minusTemp[minusInc]=dvdStore;
            first=dvdStore;
            r=0;
        }
        if(isDvd==1&&isPlus==1&&isMinus==1){
            dvdTemp[dvdInc]=parseFloat(r);
            dvdStore=dvdStore/dvdTemp[dvdInc];
            plusTemp[plusInc]=dvdStore;
            r=0;
            isActive=1;
        }
        if(isPlus3==1||isMinus3==1){
            isDvd=1;
        }
    }
    isDvd=d;
    if(isPlus==1){
        if(isMinus3==1)
        {
            for(var pi=0;pi<plusInc;pi++){
                minusTemp[minusInc]=plusTemp[pi];
                minusInc++;
            }
        }
        else{
            if(isMultiply==1||isMultiply==2){
                if(isMultiply!=1){
                    plusTemp[plusInc]=parseFloat(r);
                }
                multiStore=0;
                for(var p=0;p<=plusInc;p++){
                    multiStore=multiStore+plusTemp[p];
                    console.log(plusTemp[p]);
                }
                plusStore=multiStore;
                first=plusStore;
            }
            else if(isDvd==1||isDvd==2){
                if(isDvd!=1){
                    plusTemp[plusInc]=parseFloat(r);
                }
                multiStore=0;
                for(var p=0;p<=plusInc;p++){
                    multiStore=multiStore+plusTemp[p];
                    console.log(plusTemp[p]);
                }
                plusStore=multiStore;
                first=plusStore;
            }
            else{
                plusTemp[plusInc]=parseFloat(r);
                operations();
            }
        }
    }
    var minusActive=0;
    if(isMinus==1){
        if(isMultiply==1||isMultiply==2){
            if(isMultiply!=1){
                if(isMinus3==1){
                    r=r*minus1;
                }
                minusTemp[minusInc]=parseFloat(r);
            }
            multiStore=0;
            for(var p=0;p<=minusInc;p++){
                console.log("minus["+p+"]:"+minusTemp[p]);
                multiStore=multiStore+minusTemp[p];
                console.log(multiStore);
            }
            first=multiStore;
        }
        else if(isDvd==1||isDvd==2){
            if(isDvd!=1){
                if(isMinus3==1){
                    r=r*minus1;
                }
                minusTemp[minusInc]=parseFloat(r);
            }
            multiStore=0;
            for(var p=0;p<=minusInc;p++){
                multiStore=multiStore+minusTemp[p];
                console.log(multiStore);
            }
            first=multiStore;
        } 
        else{
        minusTemp[minusInc]=parseFloat(r);
        operations();
        }
        minusActive=1;
        if(backActive2==1||(isDvd2==1&&isMultiply2==1))
        {
            minusActive=0;
        }
        if(isActive==1){//isActive use for multiply and dvd in equal function
            minusActive=1;
        }
    }
    if(minusActive==1){
        if(isMinus2==1&&(isMultiply2==1||isDvd2==1)&&isPlus2==1){
            for(var m=0;m<minusInc;m++){
                plusStore=plusStore+minusTemp[m];
            }
            first=plusStore;
        }
    }
    console.log(first);
    document.querySelector(".display").innerHTML='';
    var displayValue=document.createElement('h1');
    displayValue.innerHTML=first;
    document.querySelector(".display").appendChild(displayValue);
    r=first;
    first=0;
    multiStore=1;
    dvdStore=1;
    isPlus=0;
    isMultiply=0;
    isDvd=0;
    for(var i=0;i<=plusInc;i++){
        plusTemp[i]=0;
    }
    plusInc=0;
    isMinus=0;
    for(var j=0;j<minusInc;j++){
        minusTemp[j]=0;
    }
    minusInc=0;
    for(var m=0;m<=multiInc;m++){
        multiTemp[m]=0;
    }
    for(var d=0;d<=dvdInc;d++){
        dvdTemp[d]=0;
    }
    for(var per=0;per<=perInc;per++){
        perStore[per]=0;
    }
    perInc=0;
    pS=0;
    multiInc=0;
    dvdInc=0;
}

// for backspace
    var operationTemp=0,backActive=0,backActive2=0;
    document.getElementById("backspace").addEventListener("click",bkspc);
    function bkspc(){
        var list = document.querySelector(".display");
        list.removeChild(list.lastElementChild);
        if(numActive==1){
            r=0;
        }
        if(numActive!=1&&(isPlus3==1||isMinus3==1||isDvd3==1||isMultiply3==1)){
            r=rTemp;
            if(isPlus3==1){
                plusTemp[plusInc-1]=0;
                plusInc--;
            }
            if(isMinus3==1){
                operationTemp=minusTemp[minusInc-1];
                minusTemp[minusInc-1]=0;
                minusInc--;
                isMinus3=0;
            }
            if(isDvd3==1){
                dvdStore=0;
                dvdInc--;
            }
            if(isMultiply3==1){
                multiStore=0;
                multiInc--;
            }
        }
        backActive=1;
        backActive2=1;
    }
// for clr
document.querySelector(".clr").addEventListener("click",clr);
function clr(){
   // var a = document.querySelector(".display").children.length;
    //for(var i=0;i<a;i++)
    document.querySelector(".display").innerHTML='';
    r=0;
    dott=0;
    isPlus=0;
    for(var i=0;i<=plusInc;i++){
        console.log(plusTemp[i]);
        plusTemp[i]=0;
    }
    plusInc=0;
    isMinus=0;
    for(var j=0;j<=minusInc;j++){
        minusTemp[j]=0;
    }
    minusInc=0;
    for(var m=0;m<=multiInc;m++){
        multiTemp[m]=0;
    }
    for(var d=0;d<=dvdInc;d++){
        dvdTemp[d]=0;
    }
    for(var per=0;per<=perInc;per++){
        perStore[per]=0;
    }
    perInc=0;
    pS=0;
    multiInc=0;
    multiStore=1;
    dvdInc=0;
    dvdStore=1;
}

