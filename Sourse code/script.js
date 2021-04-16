var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(mysong.paused){
        mysong.play();
        icon.src = "../media/pause.png";
    }else{
        musong.pause();
        icon.src = "../media/play.png"
    }
}