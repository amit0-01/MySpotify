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
   /* {songName: "starboy", filePath: "songs/starboy.mp3", coverPath: "covers/starboy1.jpeg"},
    {songName: "cheque", filePath: "songs/cheque2.mp3", coverPath: "covers/cheque2.jpg"},
    {songName: "remember the name", filePath: "songs/remember_The_Name3.mp3", coverPath: "covers/remember_the_name3.jpeg"},
    {songName: "friends", filePath: "songs/friends4.mp3", coverPath: "covers/friends4.jpg"},
    {songName: "havana", filePath: "songs/havana5.mp3", coverPath: "covers/havana5.jpg"},
    {songName: "on my way", filePath: "songs/On_My_Way6.mp3", coverPath: "covers/onmyway6.webp"},
    {songName: "senorita", filePath: "songs/senorita7.mp3", coverPath: "covers/senorita7.jpg"},
    {songName: "One love", filePath: "songs/Onelove8.mp3", coverPath: "covers/starboy1.jpeg"},
    {songName: "Baller", filePath: "songs/Baller9.mp3", coverPath: "covers/starboy1.jpeg"},
    {songName: "Ice", filePath: "songs/Ice10.mp3", coverPath: "covers/starboy1.jpeg"},
    {songName: "offshore", filePath: "songs/offshore11.mp3", coverPath: "covers/starboy1.jpeg"},
    {songName: "Dunia", filePath: "songs/Dunia12.mp3", coverPath: "covers/cheque2.jpg"},
    {songName: "Fallin apart", filePath: "songs/Fallinapart13.mp3", coverPath: "covers/remember_the_name3.jpeg"},
    {songName: "123", filePath: "songs/JanuJanu14.mp3", coverPath: "covers/friends4.jpg"},
    {songName: "Sheesha", filePath: "songs/Sheesha15.mp3", coverPath: "covers/havana5.jpg"},
    {songName: "Trucker", filePath: "songs/Trucker16.mp3", coverPath: "covers/onmyway6.webp"},
    {songName: "You", filePath: "songs/You17.mp3", coverPath: "covers/senorita7.jpg"},
    {songName: "Kamlee", filePath: "songs/Kamlee18.mp3", coverPath: "covers/starboy1.jpeg"},
    {songName: "Calculations", filePath: "songs/Calculations19.mp3", coverPath: "covers/starboy1.jpeg"},
    {songName: "Hommie call", filePath: "songs/HommieCall20.mp3", coverPath: "covers/starboy1.jpeg"},*/


    {songName: "starboy", filePath: "songs/starboy.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "cheque", filePath: "songs/cheque2.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "The name", filePath: "songs/remember_The_Name3.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "friends", filePath: "songs/friends4.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "havana", filePath: "songs/havana5.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "on my way", filePath: "songs/On_My_Way6.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "senorita", filePath: "songs/senorita7.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "One love", filePath: "songs/Onelove8.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "Baller", filePath: "songs/Baller9.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "Ice", filePath: "songs/Ice10.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "offshore", filePath: "songs/offshore11.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "Dunia", filePath: "songs/Dunia12.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "Fallin apart", filePath: "songs/Fallinapart13.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "123", filePath: "songs/JanuJanu14.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "Sheesha", filePath: "songs/Sheesha15.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "Trucker", filePath: "songs/Trucker16.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "You", filePath: "songs/You17.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "Kamlee", filePath: "songs/Kamlee18.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "Calculations", filePath: "songs/Calculations19.mp3", coverPath: "covers/Cover.jpg"},
    {songName: "Hommie call", filePath: "songs/HommieCall20.mp3", coverPath: "covers/Cover.jpg"},

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
        audioElement.src = 'songs/${songIndex + 1}.mp3';
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
    if (songIndex < songs.length - 1) {
        songIndex += 1;
    } else {
        songIndex = 0;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    Name.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});




document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length-1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;  
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    Name.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

audioElement.addEventListener('ended', () => {
    // Play the next song
    document.getElementById('next').click(); // Simulate a click on the "Next" button
});

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        let clickedIndex = parseInt(e.target.id);
        if (clickedIndex !== songIndex) {
            makeAllPlays();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = songs[clickedIndex].filePath;
            masterSongName.innerText = songs[clickedIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            Name.innerText = songs[clickedIndex].songName;
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            songIndex = clickedIndex;
        } else {
            if (audioElement.paused || audioElement.currentTime <= 0) {
                audioElement.play();
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
                gif.style.opacity = 1;
            } else {
                audioElement.pause();
                masterPlay.classList.remove('fa-pause-circle');
                masterPlay.classList.add('fa-play-circle');
                gif.style.opacity = 0;
            }
        }
    });
});









