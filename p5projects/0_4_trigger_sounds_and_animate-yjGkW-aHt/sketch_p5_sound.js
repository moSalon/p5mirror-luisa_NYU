// The Code of Music
// Luisa Pereira
// http://thecodeofmusic.net/

let blip;
let pink;
let tears; 
let takerimba; 

function preload(){
  blip = loadSound('sounds/blip.wav');
  pink = loadSound('sounds/pink.wav');
  tears = loadSound('sounds/tears.wav');
  takerimba = loadSound('sounds/takerimba.wav');
}

function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(0);
  
  // Blip
  let angle = map(blip.currentTime(), 0, blip.duration(), 0, -TWO_PI);
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  rect(0, 0, 100, 100);
  pop();
  
  // Takerimba
  let x = map(takerimba.currentTime(), 0, takerimba.duration(), 0, width);6
	ellipse(x, height/3, 100, 100);
  
  // Tears
  
  // Pink
  
}

function keyTyped() {
  if (key == 'a') {
    blip.play();
  } else if (key == 's') {
    takerimba.play();
  } else if (key == 'd') {
    tears.play();
  } else if (key = 'f') {
    pink.play();
  }
}