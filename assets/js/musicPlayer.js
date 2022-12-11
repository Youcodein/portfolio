const allMusic = [
    {
        name: "retrosoul",
        artist: "Benjamin Tissot",
        audio: "music_01"
    },
    {
        name: "bad ass",
        artist: "Benjamin Tissot",
        audio: "music_02"
    },
    {
        name: "downtown",
        artist: "Benjamin Tissot",
        audio: "music_03"
    },
    {
        name: "funny song",
        artist: "Benjamin Tissot",
        audio: "music_04"
    }
]

const musicWrap = document.querySelector(".rigthDisplay__musicplayer");
const musicName = musicWrap.querySelector(".music__view__title .title");
const musicArtist = musicWrap.querySelector(".music__view__title .artist");
const musicAudio = musicWrap.querySelector("#main-audio");
const musicPlay = musicWrap.querySelector("#control-play");

const musicProgress = musicWrap.querySelector(".progress");
const musicProgressBar = musicWrap.querySelector(".progress .bar");
const musicProgressCurrent = musicWrap.querySelector(".progress .timer .current");
const musicProgressDuration = musicWrap.querySelector(".progress .timer .duration");

let musicIndex = 1;                                                 //현재 음악 인덱스


// 음악 재생

function loadMusic(num){
    musicName.innerText = allMusic[num-1].name;                     //뮤직 이름 로드
    musicArtist.innerText = allMusic[num-1].artist;                 //뮤직 아티스트 로드
    musicAudio.src=`../music/${allMusic[num-1] .audio}.mp3`  //뮤직 로드
}

// 재생버튼
function playMusic(){
    musicWrap.classList.add("paused");
    musicPlay.setAttribute("title","정지");
    musicPlay.setAttribute("class","stop");
    musicAudio.play();
}

// 정지버튼
function pauseMusic(){
    musicWrap.classList.remove("paused");
    musicAudio.pause();
    musicPlay.setAttribute("title","재생");
    musicPlay.setAttribute("class","play");
}

// 뮤직 진행바
musicAudio.addEventListener("timeupdate", e => {
    // console.log(e);
    const currentTime = e.target.currentTime;                           //오디오의 현재 재생되는 시간
    const duration = e.target.duration;                                 //오디오의 총 길이
    let progressWidth = (currentTime/duration) * 100;                   //전체 깅이에서 현재 진행되는 시간을 백분위로 나눠줌

    musicProgressBar.style.width = `${progressWidth}%`;

    //전체 시간
    musicAudio.addEventListener("loadeddata", ()=>{
        let audioDuration = musicAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);                  //전체 시간(초)을 분단위로 쪼갬
        let totalSec = Math.floor(audioDuration % 60);                  //남은 초를 저장

        if(totalSec < 10) totalSec = `0${totalSec}`;                    //초가 한 자리 수 일때 10의 자리에 0을 붙임
        musicProgressDuration.innerText = `${totalMin}:${totalSec}`;    //완성된 시간 문자열
    })

    //진행 시간
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec<10) currentSec = `0${currentSec}`;
    musicProgressCurrent.innerText = `${currentMin}:${currentSec}`;

});
//진행 버튼 클릭
musicProgress.addEventListener("click", (e) => {
    let progressWidth =musicProgress.clientWidth;                                   //진행바 전체 길이
    let clickedOffsetX = e.offsetX;                                                 //진행바 기준으로 측정되는 X좌표값
    let songDuration = musicAudio.duration;                                         //오디오 전체 길이

    musicAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration        //백분위로 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값으로 바꿈
})

//플레이 버튼 클릭
musicPlay.addEventListener("click", ()=>{
    const isMusicPaused = musicWrap.classList.contains("paused");   //음악이 재생되고 있다는 뜻
    isMusicPaused ? pauseMusic() : playMusic();

})


