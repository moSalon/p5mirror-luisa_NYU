// The Code of Music
// Luisa Pereira
// http://thecodeofmusic.net/

let sound;

function preload(){
  sound = loadSound('sounds/takerimba.wav');
}

function setup() {
  createCanvas(600, 400);  
}

function draw(){
  background(0);
  let x = map(sound.currentTime(), 0, sound.duration(), 0, width);
	ellipse(x, height/3, 100, 100);
}

function keyTyped(){
	sound.play();
}
