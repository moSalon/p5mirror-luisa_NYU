// Click on the canvas to create a random melody
// Uncomment below to play each example

let synth = new Tone.Synth();
synth.toDestination();
// synth.portamento = 0.1;

function setup(){
   
}

function draw(){
  if(mouseIsPressed){
    // make this logarithmic
    let f = map(mouseY, height, 0, 300, 600);
    if(f > 0){
      synth.frequency.rampTo(f);     
    }
  }
}

function mousePressed(){
  let f = map(mouseY, height, 0, 300, 600);
  if(f > 0){
    synth.triggerAttack(f); 
  }
}

function mouseReleased(){
  synth.triggerRelease();
}
