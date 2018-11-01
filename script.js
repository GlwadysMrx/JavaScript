document.querySelector(".a").addEventListener("click", function () {
let premierBloc = document.querySelector(".bloc-1");
premierBloc.classList.toggle("hidden");
});

document.querySelector(".b").addEventListener("click", function () {
document.querySelector(".box:not(.hidden)").classList.add("hidden")
});

document.querySelector(".c").addEventListener("click", function (){
let divs = document.querySelectorAll(".box");
for (let i = 0; i< divs.length; i++) {
divs[i].classList.add("hidden");
}});

document.querySelector(".d").addEventListener("click", function (){
let divs = document.querySelectorAll(".box");
for (let i = 0; i< divs.length; i++) {
    if(divs[i].classList.contains("hidden")) {
        divs[i].classList.remove("hidden");
  } else{   
        divs[i].classList.add("couleur");
    }
}});

document.querySelector(".e").addEventListener("click", function (){
let divs = document.querySelectorAll(".box");
for (let i = 0; i< divs.length; i++) {
divs[i].classList.remove("hidden");
divs[i].classList.remove("couleur");
}});