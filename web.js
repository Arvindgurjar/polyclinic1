var navtoggle = document.querySelector(".arv");
navtoggle.addEventListener("click",nav1);
var class1 = "fa-circle-xmark";
function nav1(){
    navtoggle.firstChild.classList.toggle(class1);}


    var dropdown = document.querySelector(".dd");
    dropdown.addEventListener("click",drop);
    function drop(){
        dropdown.firstChild.nextSibling.classList.toggle("fa-caret-down");
        dropdown.firstChild.nextSibling.classList.toggle("fa-caret-up");
    }
    var dropdown1 = document.querySelector(".dd1");
    dropdown1.addEventListener("click",drop1);
    function drop1(){
        dropdown1.firstChild.nextSibling.classList.toggle("fa-caret-down");
        dropdown1.firstChild.nextSibling.classList.toggle("fa-caret-up");
    }
 var button = document.querySelector(".offset-2");
 button.addEventListener("click",button1);
 function button1(){
    open("Doctors.html","_blank");
 }
var button2=document.querySelector(".btn1");
button2.addEventListener("click",button1);



