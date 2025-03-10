// Click on the canvas to create a sequence of random notes
// Uncomment below to play each example

let instrument = new Tone.Synth();
instrument.toDestination();



function setup(){
  createCanvas(400, 400);
  background(0);
}

function keyPressed() {
  instrument.triggerAttack("C#4"); 
}

function keyReleased(){
  instrument.triggerRelease();
}

function draw(){
  
}

