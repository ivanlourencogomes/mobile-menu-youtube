
document.querySelector(".menu-icon").onclick = function(){
    document.querySelector("nav").classList.add("open");
}

document.querySelector(".close-icon").onclick = function(){
    document.querySelector("nav").classList.remove("open");
}