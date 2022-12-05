
//모달
const modalBtn = document.querySelector(".modalBtn");
const modalCont = document.querySelector(".modal__cont");
const modalClose = document.querySelector(".modal__close");


modalBtn.addEventListener("click", () => {
    modalCont.classList.add("show");
    modalCont.classList.remove("hide");
})

modalClose.addEventListener("click",()=>{
    modalCont.classList.add("hide");

})


// modalBtn.addEventListener("click", () => {
//     modalCont.classList.add("show");
//     modalCont.classList.remove("hide");
// })
// modalClose.addEventListener("click",()=>{
//     modalCont.classList.add("hide");

// })

