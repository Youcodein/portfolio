const likeBirdBtn = document.querySelector(".likeBtn .btn1");
const likeTeaBtn = document.querySelector(".likeBtn .btn2");
const likeBreadBtn = document.querySelector(".likeBtn .btn3");
const likeDrawBtn = document.querySelector(".likeBtn .btn4");
const likeBookBtn = document.querySelector(".likeBtn .btn5");
const likeResetBtn = document.querySelector(".likeBtn .resetBtn");


const breadImg = document.querySelector(".sticker__bread");
const birdImg = document.querySelector(".sticker__bird");
const teaImg = document.querySelector(".sticker__tea");
const drawImg = document.querySelector(".sticker__draw");
const bookImg = document.querySelector(".sticker__book");

const WEDDECO = document.querySelector(".deco__sticker__WED");
const WEDDECOBtn = document.querySelector(".swipeWEBD input");

likeBirdBtn.addEventListener("click", () => {
    birdImg.classList.toggle("show");
})
likeTeaBtn.addEventListener("click", () => {
    teaImg.classList.toggle("show");
})
likeBreadBtn.addEventListener("click", () => {
    breadImg.classList.toggle("show");
})
likeDrawBtn.addEventListener("click", () => {
    drawImg.classList.toggle("show");
})
likeBookBtn.addEventListener("click", () => {
    bookImg.classList.toggle("show");
})

WEDDECOBtn.addEventListener("click", () => {
    WEDDECO.classList.toggle("show");
})

likeResetBtn.addEventListener("click", () => {
    birdImg.classList.remove("show");
    teaImg.classList.remove("show");
    breadImg.classList.remove("show");
    drawImg.classList.remove("show");
    bookImg.classList.remove("show");
})