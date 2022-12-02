
//모달
const aboutMeBtn = document.querySelector(".aboutMeBtn");
const aboutMeClose = document.querySelector(".aboutMe__close");
const aboutMecont = document.querySelector(".aboutMe__cont");



aboutMeBtn.addEventListener("click", () => {
    aboutMecont.classList.add("show");
    aboutMecont.classList.remove("hide");
})
aboutMeClose.addEventListener("click",()=>{
    aboutMecont.classList.add("hide");

})

