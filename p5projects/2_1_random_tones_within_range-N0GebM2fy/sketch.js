// The Code of Music
// NYU ITP/IMA Fall 2024
// Luisa Pereira

// Press any key to play a random tone within a range

// Create a Synth instrument, which can play specific frequencies
const synth = new Tone.Synth();
synth.toDestination();

// Glide to the next note over 0.1 seconds
// synth.portamento = 0.1; 

function keyPressed() {
  // Pick a random frequency between 100 and 10000Hz
  let frequency = random(100, 10000);
  // Try different frequency ranges: 
  // - 100 - 10000 Hz: human vocal range
  // - 300 - 600 Hz: one octave
  // - 400 - 430 Hz: 1/8 of an octave

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

function draw(){
  
}
