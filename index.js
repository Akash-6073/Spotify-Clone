console.log("asgdavau");

// Initializing variables 
let index=1;
let audioElement=new Audio('song/1.mp3');
let play=document.getElementById('play');
let progressbar = document.getElementById('mpb');
let gif=document.getElementById('gif');
let songitem= Array.from(document.getElementsByClassName('songitem'));
let sn=document.getElementById('sn');
let songs=[
    {songname : 'Hukkum' , filepath : "song/1.mp3" , coverpath : "covers/1.jpg"},
    {songname : 'Hoyna Hoyna' , filepath : "song/2.mp3" , coverpath : "covers/2.jpg"},
    {songname : 'Arambham le' , filepath : "song/3.mp3" , coverpath : "covers/3.jpg"},
    {songname : 'Naa Ready dha' , filepath : "song/4.mp3" , coverpath : "covers/4.jpg"},
    {songname : 'Gaali vaaluga' , filepath : "song/5.mp3" , coverpath : "covers/5.jpg"},
    {songname : 'Vikram-Title track' , filepath : "song/6.mp3" , coverpath : "covers/6.jpg"},
    {songname : 'Chaleya' , filepath : "song/7.mp3" , coverpath : "covers/7.jpg"},
    {songname : 'Adhento Gani' , filepath : "song/8.mp3" , coverpath : "covers/8.jpg"},
]
songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
})
// Listen the event


// Handle play/pause click
play.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    sn.innerText=songs[index-1].songname;
        
    }

    else{
        audioElement.pause();
        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})

//  time update
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressbar.value=progress
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime=(progressbar.value*(audioElement.duration/100));
})

const plays=()=>{
Array.from(document.getElementsByClassName("songplay")).forEach((element,i)=>{
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");

})
}
Array.from(document.getElementsByClassName("songplay")).forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        index=parseInt(e.target.id);
        plays();
        gif.style.opacity=1;

        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.currentTime=0;
 audioElement.src=`song/${index}.mp3`;
 audioElement.play();
 play.classList.remove("fa-circle-play")
 play.classList.add("fa-circle-pause")
 sn.innerText=songs[index-1].songname;


    })
})

let fwd=document.getElementById('fwd');
fwd.addEventListener('click',()=>{
    if(index==8)
    {
        index=1;
    }
    else{
        index+=1;
    }
    sn.innerText=songs[index-1].songname;
    gif.style.opacity=1;

    audioElement.currentTime=0;
    audioElement.src=`song/${index}.mp3`;
    audioElement.play();
    play.classList.remove("fa-circle-play")
    play.classList.add("fa-circle-pause")

})

let bwd=document.getElementById("bwd");
bwd.addEventListener('click',()=>{

    if(index==1)
    {
        index=8
    }
    else{
        index-=1;
    }
    sn.innerText=songs[index-1].songname;
    gif.style.opacity=1;

    audioElement.currentTime=0;
    audioElement.src=`song/${index}.mp3`;
    audioElement.play();
    play.classList.remove("fa-circle-play")
    play.classList.add("fa-circle-pause")
})
