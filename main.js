//Funciones de audio
var slowA = $("#slowA")[0];
slowA.volume = 0.2;

$("#na ").mouseenter(function () {
  slowA.pause();
  slowA.play();
});

$("#na ").mouseleave(function () {
  slowA.pause();
});
