// The Code of Music
// NYU ITP/IMA Fall 2024
// Luisa Pereira

// Press any key to play a random pitch within a set

// Create a Synth instrument, which can play specific frequencies
let synth = new Tone.Synth();
synth.toDestination();

let f = 100; // In Hz
let scale = [];
// Number of perceptually equal steps in the scale
let n = 12;

// Derive equal-tempered chromatic scale
scale[0] = f;
const nthRootOfTwo = Math.pow(2, 1 / n);
for (let i = 0; i < n; i++) {
  scale[i + 1] = scale[i] * nthRootOfTwo;
}
console.log(scale);

function keyPressed() {
  // If a number key was pressed, play the respective position in the pitch set array
  const pos = int(key) - 1;
  if(0 <= pos && pos < n){
    synth.triggerAttack(scale[pos]);  
  }
}

// Create p5.js' setup function - this is just to make sure p5.js is initialized 
// and the event handlers we defined above (mousePressed, mouseReleased) are called
function setup() {
  // Empty function body
}
