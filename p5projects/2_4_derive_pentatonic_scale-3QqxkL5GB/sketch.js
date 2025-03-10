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
let scale = [];
scale[0] = f;
scale[3] = f * 3 / 2;
scale[5] = f * 2;
scale[2] = scale[5] * 2 / 3;
scale[1] = scale[3] * 3 / 4;
scale[4] = scale[1] * 3 / 2;
console.log(scale);

function keyPressed() {
  // If a number key was pressed, play the respective position in the pitch set array
  let pos = int(key) - 1;
  if(0 <= pos && pos < scale.length){
    synth.triggerAttack(scale[pos]);  
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
