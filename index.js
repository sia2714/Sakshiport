
let i = 0; 
let j = 4; 

const dots = document.querySelectorAll(".dot-con button");
const images = document.querySelectorAll(".image-con img");

function next(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}

function prev(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator(i+1);
}

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-con button:nth-child(" + num + ")").style.backgroundColor ="black";
  
}

function dot(index){
    images.forEach(function(image){
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}
let ii = 0; // current slide
let jj = 4;

const dotss = document.querySelectorAll(".cont button");
const imagess = document.querySelectorAll(".image-con1 img");

function nextt(){
    document.getElementById("contentt" + (ii+1)).classList.remove("activee");
    ii = ( jj + ii + 1) % jj;
    document.getElementById("contentt" + (ii+1)).classList.add("activee");
    indicator( ii+ 1 );
}

function prevv(){
    document.getElementById("contentt" + (ii+1)).classList.remove("activee");
    ii = (jj + ii - 1) % jj;
    document.getElementById("contentt" + (ii+1)).classList.add("activee");
    indicator(i+1);
}

function indicator(num){
    dots.forEach(function(dott){
        dott.style.backgroundColor = "transparent";
    });
    document.querySelector(".cont button:nth-child(" + num + ")").style.backgroundColor = "transparent";
    

}

function dott(index){
    images.forEach(function(image){
        image.classList.remove("activee");
    });
    document.getElementById("contentt" + index).classList.add("activee");
    ii = index - 1;
    indicator(index);
}

let iii = 0; // current slide
let jjj = 4;

const dotsss = document.querySelectorAll(".contt button");
const imagesss = document.querySelectorAll(".image-con11 img");

function nexttt(){
    document.getElementById("contenttt" + (iii+1)).classList.remove("activeee");
    iii = ( jjj + iii + 1) % jjj;
    document.getElementById("contenttt" + (iii+1)).classList.add("activeee");
    indicator( iii+ 1 );
}

function prevvv(){
    document.getElementById("contenttt" + (iii+1)).classList.remove("activeee");
    iii = (jjj + iii - 1) % jjj;
    document.getElementById("contenttt" + (iii+1)).classList.add("activeee");
    indicator(i+1);
}

function indicator(num){
    dots.forEach(function(dottt){
        dottt.style.backgroundColor = "transparent";
    });
    document.querySelector(".cont button:nth-child(" + num + ")").style.backgroundColor = "transparent";
    

}

function dottt(index){
    images.forEach(function(image){
        image.classList.remove("activee");
    });
    document.getElementById("contenttt" + index).classList.add("activeee");
    iii = index - 1;
    indicator(index);
}

