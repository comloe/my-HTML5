//获取video对象
let video=document.getElementById("video");
//获取播放按钮对象
let controlButton=document.getElementById("control-button");
//获取播放图标的对象
let controlIcon=document.getElementById("control-icon");
//获取音量按钮对象
let volumeButton=document.getElementById("volume-button")
//获取音量图标对象
let volumeIcon=document.getElementById("volume-icon");
//获取音量滑块的对象
let volumeRange=document.getElementById("volume");
//获取全屏按钮对象
let fullscreenButton=document.getElementById("fullscreen-button");
//获取全屏图标对象
let fullsceenIcon=document.getElementById("fullsceen-icon");
let videoContainer=document.getElementById("video-container")
//获取时间对象
let timeElapsed=document.getElementById("time-elapsed")
let duration=document.getElementById("duration")
//进度条对象
let progressBar=document.getElementById("progress-bar")
let seek=document.getElementById("seek");
//播放的单击事件
controlButton.onclick=()=>{
    if(video.paused||video.ended){
        video.play();
        controlIcon.src="icons/pause.png"
    }else{
        video.pause();
        controlIcon.src="icons/play.png"
    }
}
//音量控制事件
volumeButton.onclick=()=>{
    video.muted= !video.muted
    if(video.muted){
        volumeRange.dataVolume=volumeRange.value
        volumeIcon.src="icons/volume-off.png"
        volumeRange.value=0
    }else{
        volumeIcon.src="icons/volume-on.png"
        volumeRange.value=volumeRange.dataVolume
    }
}
//滑块的事件
volumeRange.oninput=()=>{
    if(video.muted){
        //解除静音模式
        video.muted=false;
        volumeIcon.src="icons/volume-on.png"
    }
    if(volumeRange.value==0){
        video.muted=true;
        volumeIcon.src="icons/volume-off.png"
    }else{
        video.muted=false;
        volumeIcon.src="icons/volume-on.png"
    }
    //调整视频音量
    video.volume=volumeRange.value
}
fullscreenButton.onclick=()=>{
    if(document.fullscreenElement){
        document.exitFullscreen();
        fullsceenIcon.src="icons/fullscreen.png"
    }else{
        videoContainer.requestFullscreen();
        fullsceenIcon.src="icons/fullscreen-exit.png"
    }
}
//视频对象的事件 -- loadeddata
video.addEventListener('loadeddata', () => {
    //当前时间
    timeElapsed.innerText = formatTime(parseInt(video.currentTime));
    //总时长
    duration.innerText = formatTime(parseInt(video.duration));
    progressBar.max=parseInt(video.duration)
    seek.max=parseInt(video.duration)
  });
  
  //视频对象的事件 -- timeupdate
  video.addEventListener('timeupdate', () => {
    //实时更新当前时间
    timeElapsed.innerText = formatTime(parseInt(video.currentTime));
    progressBar.value=parseInt(video.currentTime)
    seek.value=parseInt(video.currentTime)
  });
//时间格式化函数
function formatTime(time) {
    let hours = parseInt(time / 3600);
    let minuts = parseInt((time - hours * 3600) / 60);
    let seconds = parseInt(time % 60);
    hours = hours < 10 ? '0' + hours : hours;
    minuts = minuts < 10 ? '0' + minuts : minuts;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return hours + ':' + minuts + ':' + seconds;
  }
  seek.oninput=()=>{
    video.currentTime=seek.value
  }