const decoBtn = document.querySelectorAll(".decoBtn button");

// main
const leftDisplay = document.querySelector(".leftDisplay");

const RightDisplaySidebar = document.querySelector(".rigthDisplay__sidebar");
const RightnDisplayMusicPlayer = document.querySelector(".rigthDisplay__musicplayer");
const RightnDisplayDecoration = document.querySelector(".rigthDisplay__decoration");
const RightDisplayGame = document.querySelector(".rigthDisplay__game");
const centerDisplayTopBtnBg = document.querySelectorAll(".centerDisplay__top .topBtn");

// sub
const centerDisplayTop = document.querySelector(".centerDisplay__top");
const centerDisplayMiddle = document.querySelector(".centerDisplay__middle");
const centerDisplayMBottomSNS = document.querySelector(".centerDisplay__bottom__SNS");
const centerDisplayMBottomContactMe = document.querySelector(".centerDisplay__bottom__ContactMe");
const RightDisplay = document.querySelector(".rightDisplay");



// btnBg
const centerDisplayMiddleTitle = document.querySelectorAll(".centerDisplay__middle__title");
const snsBtnBg = document.querySelectorAll(".snsBtn");



// dot
const dot = document.querySelectorAll(".dot");

// line
const line1 = document.querySelector(".line");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

let colorList = [
    "btn1",
    "btn2",
    "btn3",
    "btn4"
];

let main = [
    "var(--main-color1)",
    "var(--main-color2)",
    "var(--main-color3)",
    "var(--main-color4)",
];
let sub = [
    "var(--sub-color1)",
    "var(--sub-color2)",
    "var(--sub-color3)",
    "var(--sub-color4)",
];



function whatColor(click) {
    console.log(click)
    switch (click) {
        case "deco1":
            colorChage("var(--main-color1)");
            break;
        case "deco2":
            colorChage("var(--main-color2)");
            break;
        case "deco3":
            colorChage("var(--main-color3)");
            break;
        case "deco4":
            colorChage("var(--main-color4)");
            break;
    }
}

function colorChage(color) {
        leftDisplay.style.backgroundColor = color;
        RightDisplaySidebar.style.backgroundColor = color;
        RightnDisplayMusicPlayer.style.backgroundColor = color;
        RightnDisplayDecoration.style.backgroundColor = color;
        RightDisplayGame.style.backgroundColor = color;
        centerDisplayTopBtnBg.forEach((e) => {
            e.style.backgroundColor = color;
        });
}


decoBtn.forEach((e) => {
    e.addEventListener("click", () => {
        // console.log(e.value)
        whatColor(e.value);
    });
});