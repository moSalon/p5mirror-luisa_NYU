// The Code of Music
// NYU ITP/IMA Fall 2024
// Luisa Pereira

// Starter code for the Melody chapter

// Create a Synth instrument, which can play specific frequencies
const synth = new Tone.Synth();
synth.toDestination();

let fMin = 80;
let fMax = 1300;

function mousePressed() {
  let frequency = yToF(mouseY);
  console.log(frequency);
  let velocity = mouseX / width;
  synth.triggerAttack(frequency, velocity);
}

function yToF(y){
  // return map(y, height, 0, fMin, fMax);
  let turns = 1;
  let steps = map(y, height, 0, 0, turns);
  return fMin * Math.pow(2, steps); 
}

function mouseReleased() {
  // Release (stop playing) the tone
  synth.triggerRelease();
}

// Create p5.js' setup function - this is just to make sure p5.js is initialized 
// and the event handlers we defined above (mousePressed, mouseReleased) are called
function setup() {
  createCanvas(200, 200);
}

function draw(){
  background(0);
}
