// Press keys 1 - 8 on the keyboard to play a scale
// Uncomment below to play each example

const synth = new Tone.MonoSynth();
synth.toDestination();




function setup() {
  createCanvas(620, 200);
}

function keyPressed(){  
  synth.envelope.attack = map(mouseX, 0, width, 0, 2);
  let f = map(mouseY, 0, height, 880, 440);
  synth.triggerAttack(f);
    
}

function keyReleased(){
  synth.triggerRelease();
}