const myWork = document.querySelector(".centerSection");
const game = document.querySelector(".centerGame");

const gameStartBtn = document.querySelector(".gameStartBtn");

gameStartBtn.addEventListener("click", () => {
    myWork.classList.remove("show");
    game.classList.add("show");
})

const goBackBtn = document.querySelector(".goBack");

goBackBtn.addEventListener("click", () => {
    myWork.classList.add("show");
    game.classList.remove("show");
})