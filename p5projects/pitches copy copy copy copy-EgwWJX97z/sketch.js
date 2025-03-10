// Click on the canvas to create a random melody
// Uncomment below to play each example

let synth = new Tone.Synth();
synth.toDestination();
// synth.portamento = 0.1;

function setup(){
   
}

function mousePressed(){
  let frequency = random(300, 600);
  synth.triggerAttack(frequency);
}

function mouseReleased(){
  synth.triggerRelease();
}
