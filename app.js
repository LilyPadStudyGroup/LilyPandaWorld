window.addEventListener("load", function() {
  console.log("Hello World!");
  init();
});


var musicplayer;
musicplayer = new Audio('assets/whitesnow.mp3');
musicplayer.loop = true;

// 音を鳴らす
function playMusic(){
    try{
        musicplayer.play();

    }catch(e){
        alert(e);
    }
}

// 音を止める
function stopMusic(){
    musicplayer.pause();
    musicplayer.currentTime = 0;
}

function init(){
  var startMusicButton = document.getElementById("startMusicButton");
  startMusicButton.onclick = function(){
    playMusic();
  };
  
  var stopMusicButton = document.getElementById("stopMusicButton");
  stopMusicButton.onclick = function(){
    stopMusic();
  };
}