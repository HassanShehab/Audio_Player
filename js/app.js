let controllerBtn = document.querySelectorAll('.item');
let audio = document.querySelector('#quran');
let progress = document.querySelector('#progress');
let playBtn = document.querySelector('#playBtn');



audio.onlodedmetadata = function(){
    progress.max = audio.duration;
    progress.value = audio.currentTime;
}

let playFun = ()=>{
    if(playBtn.classList.contains('fa-play')){
        audio.play();
        playBtn.classList.remove('fa-play');
        playBtn.classList.add('fa-pause');
    }else if(playBtn.classList.contains('fa-pause')){
        audio.pause();
        playBtn.classList.remove('fa-pause');
        playBtn.classList.add('fa-play');
    }
}

controllerBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        btn.classList.toggle('clickEffect');
    });
    btn.addEventListener('mouseout',()=>{
        btn.classList.remove('clickEffect');
    })
});
playBtn.addEventListener('click', playFun);

if(audio.play()){
    setInterval(()=>{
        progress.value = audio.currentTime;
    },400)
}

progress.onchange = function(){
    audio.play();
    audio.currentTime = progress.value;
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
}

