// The Code of Music
// NYU ITP/IMA Fall 2024
// Luisa Pereira

// Press any key to play a random pitch within a set

// Create a Synth instrument, which can play specific frequencies
const synth = new Tone.Synth();
synth.toDestination();

// let pentatonic = [400, 450, 533.4, 600, 675, 800]; 

// Derive pentatonic scale  
const f = 200; // in Hertz
let pitchSet = [];
pitchSet[0] = f;
pitchSet[3] = f * 3 / 2;
pitchSet[5] = f * 2;
pitchSet[2] = pitchSet[5] * 2 / 3;
pitchSet[1] = pitchSet[3] * 3 / 4;
pitchSet[4] = pitchSet[1] * 3 / 2;
console.log(pitchSet);

function keyPressed() {
  // If a number key was pressed, play the respective position in the pitch set array
  let pos = int(key) - 1;
  if(0 <= pos && pos < pitchSet.length){
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

function draw(){
  
}
