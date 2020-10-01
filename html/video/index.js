// 拿到要操作的dom结构
//在这个dom上滑动鼠标能控制滑块的位置
// 能控制这个dom的高度发生变化
// 根据该dom高度的值来调整视频播放的速度

var speed = document.querySelector('.speed');
var bar = document.querySelector('.speed-bar');
var video = document.querySelector('.flex')
console.log(bar);

speed.addEventListener('mousemove',function(e){
    // 控制滑块的位置
    // console.log(e);
    var y=e.pageY - speed.offsetTop;       //offsetTop是获取某个dom结构到浏览器的高度
    var percent=y/speed.offsetHeight;       //获取某个dom结构自身的高度
    var min=0.4;
    var max=4;
    var height=Math.round(percent*100)+'%';
    var playbackRate=percent*(max-min)+min;
    console.log(height);
    bar.style.height=height;
    video.playbackRate=playbackRate; //设置播放速度
    bar.textContent=playbackRate.toFixed(2)+'x';
});