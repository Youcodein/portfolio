
//모달
var modalBtn = document.querySelector(".modalBtn");
var modalCont = document.querySelector(".modal__cont");
var modalClose = document.querySelector(".modal__close");
var funcs = [];




function Modal(num) {
    return function () {
        modalBtn.addEventListener("click", () => {
            modalCont.classList.add("show");
            modalCont.classList.remove("hide");
        })
        
        modalClose.addEventListener("click",()=>{
            modalCont.classList.add("hide");
        
        })
    };
}

for (var i = 0; i < modalBtn.length; i++) {
    funcs[i] = Modal(i);
}

for(var j = 0; j < modalBtn.length; j++) {
    funcs[j]();
  }

// modalBtn.addEventListener("click", () => {
//     modalCont.classList.add("show");
//     modalCont.classList.remove("hide");
// })
// modalClose.addEventListener("click",()=>{
//     modalCont.classList.add("hide");

// })

