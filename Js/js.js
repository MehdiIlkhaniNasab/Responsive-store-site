let menu = document.querySelector(".nav-header")
let menuBtn = document.querySelector(".bars")
let menuBtnIcon = document.querySelector(".bars i")
let menuBtnClose = document.querySelector(".icon-close")
let menuBtnIconClose = document.querySelector(".icon-close i")
menuBtn.addEventListener("click",function (){
    if (menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left = "0%"
        menuBtnIcon.classList = "fas fa-times"

    } else {
        menu.style.left = "-104%"
        menuBtnIcon.classList = "fas fa-bars"
    }
   
});
menuBtnClose.addEventListener("click",function(){
    if(menuBtnIconClose.classList.contains("fa-times")){
        menu.style.left = "-104%"
        menuBtnIcon.classList = "fas fa-bars"

    }
})