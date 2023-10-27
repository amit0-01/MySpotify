console.log("hello javascript");
//initailisse the variables
let songIndex=0;
let audioElement= new Audio('songs/starboy.mp3') ;
let masterPlay= document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName =document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songName=document.getElementsByClassName("songName");

let songs=[
    {songName: "starboy", filePath: "songs/starboy.mp3", coverPath: "covers/starboy1.jpeg"},
    {songName: "cheque", filePath: "songs/cheque2.mp3", coverPath: "covers/cheque2.jpg"},
    {songName: "remember the name", filePath: "songs/remember_The_Name3.mp3", coverPath: "covers/remember_the_name3.jpeg"},
    {songName: "friends", filePath: "songs/friends4.mp3", coverPath: "covers/friends4.jpg"},
    {songName: "havana", filePath: "songs/havana5.mp3", coverPath: "covers/havana5.jpg"},
    {songName: "on my way", filePath: "songs/On_My_Way6.mp3", coverPath: "covers/onmyway6.webp"},
    {songName: "senorita", filePath: "songs/senorita7.mp3", coverPath: "covers/senorita7.jpg"},
    {songName: "starboy2", filePath: "songs/starboy.mp3", coverPath: "covers/starboy1.jpeg"},
    {songName: "starboy3", filePath: "songs/starboy.mp3", coverPath: "covers/starboy1.jpeg"},
    {songName: "starboy4", filePath: "songs/starboy..mp3", coverPath: "covers/starboy1.jpeg"},
    {songName: "starboy", filePath: "songs/starboy.mp3", coverPath: "covers/starboy1.jpeg"},
    {songName: "cheque", filePath: "songs/cheque2.mp3", coverPath: "covers/cheque2.jpg"},
    {songName: "remember the name", filePath: "songs/remember_The_Name3.mp3", coverPath: "covers/remember_the_name3.jpeg"},
    {songName: "friends", filePath: "songs/friends4.mp3", coverPath: "covers/friends4.jpg"},
    {songName: "havana", filePath: "songs/havana5.mp3", coverPath: "covers/havana5.jpg"},
    {songName: "on my way", filePath: "songs/On_My_Way6.mp3", coverPath: "covers/onmyway6.webp"},
    {songName: "senorita", filePath: "songs/senorita7.mp3", coverPath: "covers/senorita7.jpg"},
    {songName: "starboy2", filePath: "songs/starboy.mp3", coverPath: "covers/starboy1.jpeg"},
    {songName: "starboy3", filePath: "songs/starboy.mp3", coverPath: "covers/starboy1.jpeg"},
    {songName: "starboy4", filePath: "songs/starboy..mp3", coverPath: "covers/starboy1.jpeg"},

]
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
//haanle play/pause click
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
});

//listen to events
audioElement.addEventListener('timeupdate' , ()=> {
    //seekbar update
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-pause-circle');


    })
}
Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// ... (previous code remains the same)

Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        Name.innerText=songs[songIndex].songName;
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {  // Check if it's the last song
        songIndex = 0;  // Reset to the first song
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;  // Set the new audio source
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();  // Play the new song
    Name.innerText=songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});



document.getElementById('previous').addEventListener('click', () =>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src= 'songs/${songIndex+1}.mp3';
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    Name.innerText=songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


