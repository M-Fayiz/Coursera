let nav = document.getElementById("expand");
let x = document.getElementById("x-button");

let fxd =document.getElementById("down");
let y = document.getElementById("menu");

let count=1;

function navbar(){
    console.log("working");
    if(count==1){
        nav.style.display ="flex";
        count=0;
    }else{
        nav.style.display="none";
        count=1;
    }
}
let num=2;
function expand2(){
    console.log("hello");
    if(num==2){
        
        fxd.style.display="flex";
        num=3;
    }else{
        fxd.style.display="none";
        num=2;
    }
}