console.log(`Hello channel welcome to my guys`);

let songindex= 0;
let audioe = new Audio('Eminem - Without Me (Official Music Video).mp3');
let masterplay=document.getElementById('masterplay');
let progbar=document.getElementById('progbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitem=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songname:"Without Me - Eminem ",filepath:"songs/1.mp3",coverpath:"cover/withoutme.jpg"},
    {songname:"The Weeknd - Blinding Lights ",filepath:"songs/2.mp3",coverpath:"cover/blindinglights.jpeg"},
    {songname:"The Weeknd - Call Out My Name ",filepath:"songs/3.mp3",coverpath:"cover/calloutmyname.jpeg"},
    {songname:"The Weeknd - Save Your Tears ",filepath:"songs/4.mp3",coverpath:"cover/saveyourtears.jpeg"},
    {songname:"OneRepublic - Counting Stars ",filepath:"songs/5.mp3",coverpath:"cover/countingstars-v1.jpeg"},
    {songname:"kali Uchias - Melting ",filepath:"songs/6.mp3",coverpath:"cover/melting-v2.jpg"},
    {songname:"Queens - Bohemian Rapsody ",filepath:"songs/7.mp3",coverpath:"cover/queens-v3.jpg"},
    {songname:"Superman - Eminem ",filepath:"songs/8.mp3",coverpath:"cover/superman-v4.jpg"},
    {songname:"Moking Bird - Eminem ",filepath:"songs/9.mp3",coverpath:"cover/mokinbird-v5.jpg"},
    {songname:"Chokroguho - Fossils ",filepath:"songs/10.mp3",coverpath:"cover/chokroguho-v6.jpeg"},
    {songname:"Me Gusta Tu - IDK ",filepath:"songs/11.mp3",coverpath:"cover/megustastu-v0.jpeg"}
]

songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})

//audioe.play();
//play | pause

masterplay.addEventListener('click',()=>{
    if(audioe.paused || audioe.currentTime<=0){
        audioe.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioe.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//lsten to audio time change 
audioe.addEventListener('timeupdate',()=>{

    progress = parseInt((audioe.currentTime/audioe.duration)*100);
    progbar.value=progress;
})

progbar.addEventListener('change',()=>{
    audioe.currentTime=progbar.value*audioe.duration/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.add('fa-circle-play'); 
        element.classList.remove('fa-circle-pause');
    })

}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioe.src=`songs/${songindex}.mp3`;
        mastersongname.innerText=songs[songindex].songname;
        audioe.currentTime=0;
        audioe.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=11){
        songindex=1;
        mastersongname.innerText=songs[songindex-1].songname;
    }
    else{
        songindex+=1;
        mastersongname.innerText=songs[songindex-1].songname;
    }
    audioe.src=`songs/${songindex}.mp3`;
    
    audioe.currentTime=0;
    audioe.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<1){
        songindex=11;
        mastersongname.innerText=songs[songindex-1].songname;
    }
    else{
        songindex-=1;
        mastersongname.innerText=songs[songindex-1].songname;
    }
    audioe.src=`songs/${songindex}.mp3`;
    
    audioe.currentTime=0;
    audioe.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})