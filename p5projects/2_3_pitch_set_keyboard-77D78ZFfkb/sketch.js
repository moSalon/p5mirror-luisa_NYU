// The Code of Music
// NYU ITP/IMA Fall 2024
// Luisa Pereira

// Press a number key between 0 and 8 to play a note from the pitch set. 

// Create a Synth instrument, which can play specific frequencies
const synth = new Tone.Synth();
synth.toDestination();

// Kill Bill whistling frequencies
const pitchSet = [164.81, 185.00, 196.00, 220.00, 246.94];
const n = pitchSet.length;
// Try: 
// let pentatonic = [400, 450, 533.4, 600, 675, 800]; 

function keyPressed() {
  // If a number key was pressed, play the respective position in the pitch set array
  let pos = int(key) - 1;
  if(0 <= pos && pos < n){
    synth.triggerAttack(pitchSet[pos]);  
  }
}

function keyReleased() {
  // Release (stop playing) the tone
  synth.triggerRelease();
}

// Create p5.js' setup function - this is just to make sure p5.js is initialized 
// and the event handlers we defined above (mousePressed, mouseReleased) are called
function setup() {
  
}

