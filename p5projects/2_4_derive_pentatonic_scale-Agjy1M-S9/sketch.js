// The Code of Music
// NYU ITP/IMA Fall 2024
// Luisa Pereira

// Press any key to play a random pitch within a set

// Create a Synth instrument, which can play specific frequencies
const synth = new Tone.Synth();
synth.toDestination();

// let pentatonic = [400, 450, 533.4, 600, 675, 800]; 

// Derive pentatonic scale  
const f = 261.63; // in Hertz
let pitchSet = [ f, 
  f * 3/2, 
  (f * 3/2 * 3/2) / 2, 
  (f * 3/2 * 3/2 * 3/2) / 2, 
  (f * 3/2 * 3/2 * 3/2 * 3/2) / 4
 ]
 // sort numerically in ascending order
pitchSet.sort((a, b) => a - b);
//  The comparison function (a, b) => a - b returns a number that determines the sort order:
//  If it returns a negative number, a should come before b
//  If it returns a positive number, b should come before a
//  If it returns 0, the order remains unchanged
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
