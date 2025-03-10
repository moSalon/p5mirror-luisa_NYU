// The Code of Music
// NYU ITP/IMA Fall 2024
// Luisa Pereira

// Press any key to play a random tone within a range

// Create a Synth instrument, which can play specific frequencies
const synth = new Tone.Synth();
synth.toDestination();

// Try changing the leap factor
let leapFactor = 1.1;

let min = 50;
let max = 10000;
let previousPitch = 100;

function keyPressed() {  
  // pick a random leap direction
  direction = random() > 0.5 ? "up" : "down"; 
  if(direction == "down") {
    leapFactor = 1/leapFactor;
  }
  let newPitch = previousPitch * leapFactor;

  // Check range and flip if needed
  if (newPitch < min || newPitch > max) {
    leapFactor = 1 / leapFactor;
    newPitch = previousPitch * leapFactor;
  }
  
  synth.triggerAttack(newPitch);
  previousPitch = newPitch;
}

function keyReleased() {
  // Release (stop playing) the tone
  synth.triggerRelease();
}

// Create p5.js' setup function - this is just to make sure p5.js is initialized 
// and the event handlers we defined above (mousePressed, mouseReleased) are called
function setup() {
  
}
