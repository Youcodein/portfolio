const myWork = document.querySelector(".centerSection");
const game = document.querySelector(".centerGame");

const gameStartBtn = document.querySelector(".gameStartBtn");

gameStartBtn.addEventListener("click", () => {
    myWork.classList.remove("show");
    game.classList.add("show");
})