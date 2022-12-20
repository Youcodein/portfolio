const myWork = document.querySelector(".centerSection");
const game = document.querySelector(".centerGame");
const searchGame = document.querySelector(".search__wrap");
const tetrisGame = document.querySelector(".tetris__wrap");
const memoryGame = document.querySelector(".memory__wrap");

const searchGameBtn = document.querySelector(".searchGameBtn");
const flipCardGameBtn = document.querySelector(".flipCardGameBtn");
const TetrisGameBtn = document.querySelector(".TetrisGameBtn");

var modalCont2 = document.querySelectorAll(".modal__cont");

searchGameBtn.addEventListener("click", () => {
    myWork.classList.remove("show");
    game.classList.add("show");
    tetrisGame.classList.remove("show");
    memoryGame.classList.remove("show");
    searchGame.classList.add("show");
    tetrisGameover()
})

TetrisGameBtn.addEventListener("click", () => {
    myWork.classList.remove("show");
    game.classList.add("show");
    searchGame.classList.remove("show");
    memoryGame.classList.remove("show");
    tetrisGame.classList.add("show");
})

flipCardGameBtn.addEventListener("click", () => {
    myWork.classList.remove("show");
    game.classList.add("show");
    searchGame.classList.remove("show");
    tetrisGame.classList.remove("show");
    memoryGame.classList.add("show");
    tetrisGameover()
})

const goBackBtn = document.querySelector(".goBack");
const MyWorkBtn = document.querySelector(".MyWorkBtn");

MyWorkBtn.addEventListener("click", () => {
    myWork.classList.add("show");
    game.classList.remove("show");
    searchGame.classList.remove("show");
    tetrisGame.classList.remove("show");
    tetrisGameover()
    modalCont2.forEach((e) => {
        e.classList.remove("show");
        e.classList.remove("hide");
    });
})

goBackBtn.addEventListener("click", () => {
    myWork.classList.add("show");
    game.classList.remove("show");
    searchGame.classList.remove("show");
    tetrisGame.classList.remove("show");
    modalCont2.forEach((e) => {
        e.classList.remove("show");
        e.classList.remove("hide");
    });
    
    
})