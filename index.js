const button=document.querySelector(".occurance");
const musicClass=document.querySelector(".music");
const playButton=document.querySelector("#play");
const audio=document.querySelector("audio");
const image=document.querySelector("#image_here");
let title=document.getElementById("title");
let artist=document.getElementById("artist");
let music=document.querySelector("audio");
const nextButton=document.querySelector("#next");
const prevButton=document.querySelector("#prev");
const genere=[
    {
     name:"Lovely",
     artist:"Khalid & Billie",
     song:"1",
    img:"1",
    },
    {
    name:"Halet Hob",
    artist:"Ellisa",
    song:"2",
    img:"2",
    },
    {
        name:"Arcade",
        artist:"Duncan Laurence",
        song:"3",
        img:"3",
        }

]
let isPlay=false;
button.addEventListener("click",()=>{
    musicClass.classList.toggle("music_color")
})
const playMusic=()=>{
    isPlay=true;
    audio.play();
    playButton.classList.replace("fa-play","fa-pause");
    image.classList.add("anim");
    audio.loop();

}
const pauseMusic=()=>{
    isPlay=false;
    audio.pause();
    playButton.classList.replace("fa-pause","fa-play");
    image.classList.remove("anim");

}
playButton.addEventListener('click',()=>{
    if(isPlay)
    pauseMusic();
    else
    playMusic();
})
let songIndex=0;
const next=()=>{
songIndex=(songIndex+1)%genere.length;
loadSong(genere[songIndex]);
playMusic();
}
const prev=()=>{
    songIndex=(songIndex-1+genere.length)%genere.length;
    loadSong(genere[songIndex]);
    playMusic();
    }
const loadSong=(genere)=>{
    title.innerText=genere.name;
    artist.innerText=genere.artist;
    music.src=`song-${genere.song}.mp3`;
    image.src=`img-${genere.img}.jpg`;
}
nextButton.addEventListener("click",()=>next());
prevButton.addEventListener("click",()=>prev());