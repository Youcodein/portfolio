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

// 음악 재생

function loadMusic(num){
    musicName.innerText = allMusic[num-1].name;                     //뮤직 이름 로드
    musicArtist.innerText = allMusic[num-1].artist;                 //뮤직 아티스트 로드
    musicView.src=`../assets/img/${allMusic[num-1] .img}.png`;      //뮤직 이미지 로드
    musicView.art= allMusic[num-1].name;                            //뮤직 이미지 alt태그 로드
    musicAudio.src=`../assets/audio/${allMusic[num-1] .audio}.mp3`  //뮤직 로드
}