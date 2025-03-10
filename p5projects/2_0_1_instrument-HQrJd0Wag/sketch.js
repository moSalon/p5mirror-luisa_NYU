// The Code of Music
// NYU ITP/IMA Fall 2024
// Luisa Pereira

// ~ Human vocal range
// Frequencies in Hz
let fMin = 80; 
let fMax = 1300; 


// Create a Synth instrument, which can play specific frequencies
const instrument = new Tone.Synth();
instrument.toDestination();

function mousePressed() {
  // map mouseY to frequency
	let frequency = yToF(mouseY);  
	
	// map mouseX to volume/velocity (0 - 1)
	let velocity = mouseX / width; 	
	
  // Trigger (play) a 100Hz tone
  instrument.triggerAttack(frequency, velocity);
}

function mouseDragged(){
	let frequency = yToF(mouseY);
	instrument.frequency.rampTo(frequency);
}

function mouseReleased() {
  // Release (stop playing) the tone
  instrument.triggerRelease();
}

const turns = 1;
function yToF(y){
  // Try first: 
  // return map(mouseY, height, 0, fMin, fMax);

  // 'steps' represents the fraction of the octave (0 - 1) the pitch should be based on mouseY (with turns = 1)
  // 'turns' allows for the height to span more than one octave
  // each turn represents one octave (a doubling of frequency)
	let steps = map(y, height, 0, 0, turns);
  return fMin * Math.pow(2, steps);
}

// Create p5.js' setup function - this is just to make sure p5.js is initialized 
// and the event handlers we defined above (mousePressed, mouseReleased) are called
function setup() {  
  createCanvas(200, 200);
  frequency = yToF(mouseY);
}

function draw() {
  background(0);
}
