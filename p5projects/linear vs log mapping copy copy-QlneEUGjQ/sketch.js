// The Code of Music
// NYU ITP/IMA Fall 2024
// Luisa Pereira

// Starter code for the Melody chapter

// Create a Synth instrument, which can play specific frequencies
const synth = new Tone.Synth();
synth.toDestination();

let scale = [];

function keyPressed(){  
  let pos = int(key)-1;
  console.log(pos);
  synth.triggerAttack(scale[pos]);
}

function keyReleased(){
  synth.triggerRelease();
}

// Create p5.js' setup function - this is just to make sure p5.js is initialized 
// and the event handlers we defined above (mousePressed, mouseReleased) are called
function setup() {
  createCanvas(200, 200);
  
  // Derive equal-tempered chromatic scale
  const n = 12;  
  scale[0] = 261.63;
  let nthRootOfTwo = pow(2, 1/n);
  for(let i=0; i < n; i++){
    scale[i+1] = scale[i] * nthRootOfTwo;
  }
  console.log(scale);
}

function draw(){
  background(0);
}
