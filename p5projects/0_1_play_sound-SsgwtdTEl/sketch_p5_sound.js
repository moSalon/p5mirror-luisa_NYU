// The Code of Music
// Luisa Pereira
// http://thecodeofmusic.net/

let sound;

function preload(){
  sound = loadSound('sounds/blip.wav');
}

function setup(){
  createCanvas(100,100);
}

function draw(){
  background(220);
}

function mouseClicked(){
  sound.play();
}
