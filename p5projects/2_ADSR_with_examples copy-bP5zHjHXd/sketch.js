let synth = new Tone.Synth().toDestination(); 
let backgroundColor = 0;

function setup() {
  background(255);

}

function draw(){
  
}

function keyTyped() {
  synth.triggerAttackRelease(400);
  background(0);
}
