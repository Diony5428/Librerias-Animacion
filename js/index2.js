new Splide('.splide').mount();
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide').mount();
});

var elms = document.getElementsByClassName('splide');
for (var i = 0, len = elms.length; i < len; i++) {
  new Splide(elms[i]).mount();
}


var sound = new Howl({
  src: ['assets/audio-1.mp3']
});

var btnPlay = document.getElementById("btnPlay");
btnPlay.addEventListener("click", function () {
  sound.play()
  btnPlay.className = "inhabilitar";
  btnPause.className = "habilitar"
});

var btnPause = document.getElementById("btnPause");
btnPause.addEventListener("click", function () {
  sound.pause()
  btnPlay.className = "habilitar";
  btnPause.className = "inhabilitar"
});


gsap.set(".logo", {
  backgroundColor: "lightblue"
})

gsap.to(".logo", { rotation: 360, x: 10,  duration: 5, repeat: -1, yoyo: true,
backgroundColor: "red", borderRadius:"20", border:"5px solid white", 
})

