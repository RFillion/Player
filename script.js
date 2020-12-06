//progression
let video = document.querySelector(".video");
let progress_bar = document.querySelector(".progress-container");
let progress = document.querySelector(".progress");

video.addEventListener("timeupdate", () => {
    let ratio = video.currentTime/video.duration;
    progress.style.transform = "scaleX(" + ratio + ")";
});

//Draggable video
let mousedown = false;

 progress_bar.addEventListener("click", scrub);

function scrub(e) {
    let scrubTime = (e.offsetX / progress_bar.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    progress_bar.value = (scrubTime/video.duration) * 100;
};

progress_bar.addEventListener("mousedown", () => mousedown = true);
progress_bar.addEventListener("mouseup", () => mousedown = false);

progress_bar.addEventListener("mousemove", (e) => mousedown && scrub(e));

//play pause stop
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let end = document.querySelector(".stop");

play.addEventListener("click", () => {
    video.play();
    progress.style.opacity = "1";
});

pause.addEventListener("click", () => {
    video.pause();
});

end.addEventListener("click", () => {
    video.pause();
    video.currentTime = 0;
});

//volume
function SetVolume(val) {
    video.volume = val / 100;
}

//confetti
let bgvid = document.getElementById('bgvid');
let audio = new Audio('medias/audio/confetti_sound.mp3');
video.addEventListener('ended', ()=> {
    bgvid.play();
    audio.play();
    bgvid.addEventListener('ended', ()=> {
        bgvid.load();
    });
});


