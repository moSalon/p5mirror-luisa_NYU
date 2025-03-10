// The Code of Music
// NYU ITP/IMA Fall 2024
// Luisa Pereira

// Press any key to play a random pitch within a set

// Create a Synth instrument, which can play specific frequencies
const synth = new Tone.Synth();
synth.toDestination();

function keyPressed() {
  // Initialize an array with 5 random (but hand-picked) frequencies
	const fs = [200.32, 350.55, 480, 670, 800]; 

  // exercise: 
  // - make these 5 frequencies random, determined at the start of the sketch
  // - let the user pick the length of the frequencies array
  
  // Pick a random frequency from the array
  let pos = int(random(0, fs.length));
	let frequency = fs[pos];

  // Trigger (play) a tone of that frequency
  synth.triggerAttack(frequency);
}

function keyReleased() {
  // Release (stop playing) the tone
  synth.triggerRelease();
}

// Create p5.js' setup function - this is just to make sure p5.js is initialized 
// and the event handlers we defined above (mousePressed, mouseReleased) are called
function setup() {
  
}
