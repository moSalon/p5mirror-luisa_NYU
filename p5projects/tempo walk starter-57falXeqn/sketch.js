
// Create a Player object and load the "footstep.wav" file
const footstep = new Tone.Player("samples/footstep.wav").toDestination();

function setup(){
  createCanvas(300, 300);
}

function draw(){
  background(255);
}

function keyPressed(){
  footstep.start();
}

