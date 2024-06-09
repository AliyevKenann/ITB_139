    const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'assets/1.mp3',
        displayName: 'Медина',
        cover: 'assets/1.jpg',
        artist: 'Jah khalib'
    },
    {
        path: 'assets/2.mp3',
        displayName: 'Karusel',
        cover: 'assets/2.jpg',
        artist: 'Orxan Zeynalli ft Miri Yusif',
    },
    {
        path: 'assets/3.mp3',
        displayName: 'Где ты теперь и с кем',
        cover: 'assets/3.jpg',
        artist: 'Баста, HammAli & Navai',
    },
    // {
    //     path: 'assets/4.mp3',
    //     displayName: 'Cедая ночь',
    //     cover: 'assets/4.jpg',
    //     artist: 'Юрий Шатунов',
    // },
];

let musicInter = 0;
let isPlaying = false;

function togglePlay(){
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic(){
    isPlaying = true
    // Change pause button icon
    playBtn.classList.replace('fa-play', 'fa-pause');

    playBtn.setAttribute('title', 'Pause');
    music.pause();
}

function pauseMusic(){
    isPlaying = false
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');

    playBtn.setAttribute('title', 'Play');
    music.pause();
}


function loadMusic(song){
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction){
    musicIntex = (musicIntex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIntex]);
    playMusic();
}

function updateProgressBar(){
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar (e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIntex]);