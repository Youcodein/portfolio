const decoBtn = document.querySelectorAll(".decoBtn button");

// main
const leftDisplay = document.querySelector(".leftDisplay");

const RightDisplaySidebar = document.querySelector(".rigthDisplay__sidebar");
const RightnDisplayMusicPlayer = document.querySelector(".rigthDisplay__musicplayer");
const RightnDisplayDecoration = document.querySelector(".rigthDisplay__decoration");
const RightDisplayGame = document.querySelector(".rigthDisplay__game");
const centerDisplayMonitor = document.querySelector(".centerDisplay__middle__monitor");
const leftDisplayMonitor = document.querySelector(".leftDisplay__monitor");

// sub
const centerDisplayTop = document.querySelector(".centerDisplay__top");
const centerDisplayMiddle = document.querySelector(".centerDisplay__middle");
const centerDisplayMBottomSNS = document.querySelector(".centerDisplay__bottom__SNS");
const centerDisplayMBottomContactMe = document.querySelector(".centerDisplay__bottom__ContactMe");
const RightDisplay = document.querySelector(".rightDisplay");



// btnBg
const centerDisplayTopBtnBg = document.querySelectorAll(".centerDisplay__top .topBtn");
const centerDisplayMiddleTitle = document.querySelectorAll(".centerDisplay__middle__title");
const snsBtnBg = document.querySelectorAll(".snsBtn");

// Mainbg
const mainBG = document.querySelector("body");

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
            colorChage1("var(--main-color1)");
            colorChage2("var(--sub-color1)");
            colorChage3("var(--bg-color1)");
            break;
        case "deco2":
            colorChage1("var(--main-color2)");
            colorChage2("var(--sub-color2)");
            colorChage3("var(--bg-color2)");
            break;
        case "deco3":
            colorChage1("var(--main-color3)");
            colorChage2("var(--sub-color3)");
            colorChage3("var(--bg-color3)");
            break;
        case "deco4":
            colorChage1("var(--main-color4)");
            colorChage2("var(--sub-color4)");
            colorChage3("var(--bg-color4)");
            break;
    }
}

function colorChage1(color1) {
        leftDisplay.style.backgroundColor = color1;
        RightDisplaySidebar.style.backgroundColor = color1;
        RightnDisplayMusicPlayer.style.backgroundColor = color1;
        RightnDisplayDecoration.style.backgroundColor = color1;
        RightDisplayGame.style.backgroundColor = color1;
        centerDisplayMonitor.style.borderColor = color1;
        centerDisplayTopBtnBg.forEach((ea) => {
            ea.style.backgroundColor = color1;
        });
        centerDisplayMiddleTitle.forEach((eb) => {
            eb.style.backgroundColor = color1;
        });
        snsBtnBg.forEach((ec) => {
            ec.style.backgroundColor = color1;
        });
}

function colorChage2(color2) {
    centerDisplayTop.style.backgroundColor = color2;
    centerDisplayMiddle.style.backgroundColor = color2;
    centerDisplayMBottomSNS.style.backgroundColor = color2;
    centerDisplayMBottomContactMe.style.backgroundColor = color2;
    RightDisplay.style.backgroundColor = color2;
    leftDisplayMonitor.style.borderColor = color2;
}

function colorChage3(color3) {
    mainBG.style.backgroundColor = color3;
}


decoBtn.forEach((e) => {
    e.addEventListener("click", () => {
        // console.log(e.value)
        whatColor(e.value);
    });
});