let bpm = 120;
let interval = 60/bpm;

let count = -1;
let beat;

const repeatEvent = new Tone.Loop(playDrum, interval);
repeatEvent.start(0);

function playDrum(time){
  footstep.start(time);
  count++;
  beat = count % 4; 
  console.log(count);
}

// Create a Player object and load the "footstep.wav" file
const footstep = new Tone.Player("samples/39044__wildweasel__wood3.wav").toDestination();

function setup(){
  createCanvas(300, 300);
}

function draw(){
  background(255);
}

function keyPressed(){
  Tone.Transport.start();
}

