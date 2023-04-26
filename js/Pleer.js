/*1111111111111111111111111111111111111*********************************************************************/
var audio1 = document.getElementById("myAudio1");
var playButton1 = document.getElementById("playButton1");
var pauseButton1 = document.getElementById("pauseButton1");
var timeSlider1 = document.getElementById("timeSlider1");

playButton1.addEventListener("click", function() {
  audio1.play();
  playButton1.innerHTML = "▶";
  pauseButton1.innerHTML = "◻";
});

pauseButton1.addEventListener("click", function() {
  audio1.pause();
  playButton1.innerHTML = "▷";
  pauseButton1.innerHTML = "◼";
});

timeSlider1.addEventListener("input", function() {
  audio1.currentTime = audio1.duration * timeSlider1.value;
});

audio1.addEventListener("timeupdate", function() {
  timeSlider1.value = audio1.currentTime / audio1.duration;
});
/*222222222222222222*******************************************************************************/
var audio2 = document.getElementById("myAudio2");
var playButton2 = document.getElementById("playButton2");
var pauseButton2 = document.getElementById("pauseButton2");
var timeSlider2 = document.getElementById("timeSlider2");

playButton2.addEventListener("click", function() {
  audio2.play();
  playButton2.innerHTML = "▶";
  pauseButton2.innerHTML = "◻";
});

pauseButton2.addEventListener("click", function() {
  audio2.pause();
  playButton2.innerHTML = "▷";
  pauseButton2.innerHTML = "◼";
});

timeSlider2.addEventListener("input", function() {
  audio2.currentTime = audio2.duration * timeSlider2.value;
});

audio2.addEventListener("timeupdate", function() {
  timeSlider2.value = audio2.currentTime / audio2.duration;
});
/*3333333333333333333333***************************************************************************/
var audio3 = document.getElementById("myAudio3");
var playButton3 = document.getElementById("playButton3");
var pauseButton3 = document.getElementById("pauseButton3");
var timeSlider3 = document.getElementById("timeSlider3");

playButton3.addEventListener("click", function() {
  audio3.play();
  playButton3.innerHTML = "▶";
  pauseButton3.innerHTML = "◻";
});

pauseButton3.addEventListener("click", function() {
  audio3.pause();
  playButton3.innerHTML = "▷";
  pauseButton3.innerHTML = "◼";
});

timeSlider3.addEventListener("input", function() {
  audio3.currentTime = audio3.duration * timeSlider3.value;
});

audio3.addEventListener("timeupdate", function() {
  timeSlider3.value = audio3.currentTime / audio3.duration;
});
/*444444444444444444444444**********************************************************************/
var audio4 = document.getElementById("myAudio4");
var playButton4 = document.getElementById("playButton4");
var pauseButton4 = document.getElementById("pauseButton4");
var timeSlider4 = document.getElementById("timeSlider4");

playButton4.addEventListener("click", function() {
  audio4.play();
  playButton4.innerHTML = "▶";
  pauseButton4.innerHTML = "◻";
});

pauseButton4.addEventListener("click", function() {
  audio4.pause();
  playButton4.innerHTML = "▷";
  pauseButton4.innerHTML = "◼";
});

timeSlider4.addEventListener("input", function() {
  audio4.currentTime = audio4.duration * timeSlider4.value;
});

audio4.addEventListener("timeupdate", function() {
  timeSlider4.value = audio4.currentTime / audio4.duration;
});
/*55555555555555555555555*************************************************************************/
var audio5 = document.getElementById("myAudio5");
var playButton5 = document.getElementById("playButton5");
var pauseButton5 = document.getElementById("pauseButton5");
var timeSlider5 = document.getElementById("timeSlider5");

playButton5.addEventListener("click", function() {
  audio5.play();
  playButton5.innerHTML = "▶";
  pauseButton5.innerHTML = "◻";
});

pauseButton5.addEventListener("click", function() {
  audio5.pause();
  playButton5.innerHTML = "▷";
  pauseButton5.innerHTML = "◼";
});

timeSlider5.addEventListener("input", function() {
  audio5.currentTime = audio5.duration * timeSlider5.value;
});

audio5.addEventListener("timeupdate", function() {
  timeSlider5.value = audio5.currentTime / audio5.duration;
});
/*66666666666666666666*****************************************************************/
var audio6 = document.getElementById("myAudio6");
var playButton6 = document.getElementById("playButton6");
var pauseButton6 = document.getElementById("pauseButton6");
var timeSlider6 = document.getElementById("timeSlider6");

playButton6.addEventListener("click", function() {
  audio6.play();
  playButton6.innerHTML = "▶";
  pauseButton6.innerHTML = "◻";
});

pauseButton6.addEventListener("click", function() {
  audio6.pause();
  playButton6.innerHTML = "▷";
  pauseButton6.innerHTML = "◼";
});

timeSlider6.addEventListener("input", function() {
  audio6.currentTime = audio6.duration * timeSlider6.value;
});

audio6.addEventListener("timeupdate", function() {
  timeSlider6.value = audio6.currentTime / audio6.duration;
});
/*777777777777777777777777777777***********************************************************/
var audio7 = document.getElementById("myAudio7");
var playButton7 = document.getElementById("playButton7");
var pauseButton7 = document.getElementById("pauseButton7");
var timeSlider7 = document.getElementById("timeSlider7");

playButton7.addEventListener("click", function() {
  audio7.play();
  playButton7.innerHTML = "▶";
  pauseButton7.innerHTML = "◻";
});

pauseButton7.addEventListener("click", function() {
  audio7.pause();
  playButton7.innerHTML = "▷";
  pauseButton7.innerHTML = "◼";
});

timeSlider7.addEventListener("input", function() {
  audio7.currentTime = audio7.duration * timeSlider7.value;
});

audio7.addEventListener("timeupdate", function() {
  timeSlider7.value = audio7.currentTime / audio7.duration;
});
/*88888888888888888888888888888888***********************************************************/
var audio8 = document.getElementById("myAudio8");
var playButton8 = document.getElementById("playButton8");
var pauseButton8 = document.getElementById("pauseButton8");
var timeSlider8 = document.getElementById("timeSlider8");

playButton8.addEventListener("click", function() {
  audio8.play();
  playButton8.innerHTML = "▶";
  pauseButton8.innerHTML = "◻";
});

pauseButton8.addEventListener("click", function() {
  audio8.pause();
  playButton8.innerHTML = "▷";
  pauseButton8.innerHTML = "◼";
});

timeSlider8.addEventListener("input", function() {
  audio8.currentTime = audio8.duration * timeSlider8.value;
});

audio8.addEventListener("timeupdate", function() {
  timeSlider8.value = audio8.currentTime / audio8.duration;
});
/*9999999999999999999999999999999*************************************************************/
var audio9 = document.getElementById("myAudio9");
var playButton9 = document.getElementById("playButton9");
var pauseButton9 = document.getElementById("pauseButton9");
var timeSlider9 = document.getElementById("timeSlider9");

playButton9.addEventListener("click", function() {
  audio9.play();
  playButton9.innerHTML = "▶";
  pauseButton9.innerHTML = "◻";
});

pauseButton9.addEventListener("click", function() {
  audio9.pause();
  playButton9.innerHTML = "▷";
  pauseButton9.innerHTML = "◼";
});

timeSlider9.addEventListener("input", function() {
  audio9.currentTime = audio9.duration * timeSlider9.value;
});

audio9.addEventListener("timeupdate", function() {
  timeSlider9.value = audio9.currentTime / audio9.duration;
});
/************************************************************************************************/
var audio = document.getElementById("myAudio");
var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var timeSlider = document.getElementById("timeSlider");

playButton.addEventListener("click", function() {
  audio.play();
  playButton.innerHTML = "▶";
  pauseButton.innerHTML = "◻";
});

pauseButton.addEventListener("click", function() {
  audio.pause();
  playButton.innerHTML = "▷";
  pauseButton.innerHTML = "◼";
});

timeSlider.addEventListener("input", function() {
  audio.currentTime = audio.duration * timeSlider.value;
});

audio.addEventListener("timeupdate", function() {
  timeSlider.value = audio.currentTime / audio.duration;
});