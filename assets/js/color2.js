const decoBtn = document.querySelectorAll(".decoBtn button");

const musicPlayStopBtn = document.querySelector(".control #control-play svg path");
// mainColor



const mainColor = document.querySelectorAll(".mainColor")
const mainColorFont = document.querySelectorAll(".mainColorFont")



const centerDisplayMonitor = document.querySelector(".centerDisplay__middle__monitor");
const leftDisplayMonitor = document.querySelector(".leftDisplay__monitor")

const centerDisplayGameMonitor = document.querySelector(".gameView");
const decorationBtnBorder = document.querySelectorAll(".decoBtn button");

// subColor
const subColor = document.querySelectorAll(".subColor")
const subColorFont = document.querySelectorAll(".subColorFont")

const fontColorOp = document.querySelectorAll(".fontColorOp")




// 박스섀도우 버튼

const squareShadow1 = document.querySelector(".aboutMeBtn");
const squareShadow2 = document.querySelector(".gameStartBtn");

// btnBg
const snsBtnBg = document.querySelectorAll(".snsBtn");

// Mainbg
const mainBG = document.querySelector("body");

// dot
const dot = document.querySelectorAll(".dot");

// line
const line1 = document.querySelector(".line");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

// font
const headerTitle = document.querySelector(".leftDisplay__header");
const modeChangeTitle = document.querySelector(".modeChange__title h2");

let randomColor = Math.floor(Math.random()*10);

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

let hexcode1 = [
    "#B8405E",
    "#FFE3E3",
    "#262A53",
    "#EEE6CE"
]



function whatColor(click) {
    console.log(click)
    switch (click) {
        case "deco1":
            tagColor = hexcode1[0];
            colorChage1("var(--main-color1)");
            colorChage2("var(--sub-color1)");
            colorChage3("var(--bg-color1)");
            colorChage4("var(--fontColorOp1)");
            colorChage5("var(--boxShadow1)");
            break;
        case "deco2":
            tagColor = hexcode1[1];
            colorChage1("var(--main-color2)");
            colorChage2("var(--sub-color2)");
            colorChage3("var(--bg-color2)");
            colorChage4("var(--fontColorOp2)");
            colorChage5("var(--boxShadow2)");
            break;
        case "deco3":
            tagColor = hexcode1[2];
            colorChage1("var(--main-color3)");
            colorChage2("var(--sub-color3)");
            colorChage3("var(--bg-color3)");
            colorChage4("var(--fontColorOp3)");
            colorChage5("var(--boxShadow3)");
            break;
        case "deco4":
            tagColor = hexcode1[3];
            colorChage1("var(--main-color4)");
            colorChage2("var(--sub-color4)");
            colorChage3("var(--bg-color4)");
            colorChage4("var(--fontColorOp4)");
            colorChage5("var(--boxShadow4)");
            break;
    }
}

// main컬러 체인지
function colorChage1(color1) {
        
        centerDisplayMonitor.style.borderColor = color1;
    centerDisplayGameMonitor.style.borderColor = color1;

        
        mainColor.forEach((em) => {
            em.style.backgroundColor = color1;
        });
        mainColorFont.forEach((emf) => {
            emf.style.color = color1;
        });
        
}

// sub컬러 체인지
function colorChage2(color2) {
    
    subColor.forEach((es) => {
        es.style.backgroundColor = color2;
    });
    decorationBtnBorder.forEach((ebb) => {
        ebb.style.borderColor = color2;
    });
    subColorFont.forEach((esf) => {
        esf.style.color = color2;
    });
    dot.forEach((ed) => {
        ed.style.backgroundColor = color2;
    });
    leftDisplayMonitor.style.borderColor = color2;
    line1.style.backgroundColor = color2;

    line2.style.backgroundColor = color2;

    line3.style.backgroundColor = color2;
    musicPlayStopBtn.setAttribute("fill", tagColor);
    

}

// 배경컬러 체인지
function colorChage3(color3) {
    mainBG.style.backgroundColor = color3;
}

// 폰트컬러 체인지
function colorChage4(color4) {
    fontColorOp.forEach((efo)=>{
        efo.style.color = color4;
    })

}

// 버튼 그림자 컬러 체인지
function colorChage5(color5) {
    document.documentElement.style.setProperty("--boxShadow0",color5);

}



decoBtn.forEach((e) => {
    e.addEventListener("click", () => {
        whatColor(e.value);
    });
});