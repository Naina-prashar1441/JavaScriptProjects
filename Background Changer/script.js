let black = document.getElementById("black");
let purple = document.getElementById("purple");
let aqua = document.getElementById("aqua");
let grey = document.getElementById("white");
let bg = document.getElementById("container");

black.addEventListener('click', function(){
    bg.style.backgroundColor = "black";
})

purple.addEventListener('click', function(){
    bg.style.backgroundColor = "plum";
})

aqua.addEventListener('click', function(){
    bg.style.backgroundColor = "aqua";
})

grey.addEventListener('click', function(){
    bg.style.backgroundColor = "rgb(132, 167, 198)";
})