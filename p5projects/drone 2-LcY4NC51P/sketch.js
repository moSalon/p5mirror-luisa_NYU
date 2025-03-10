const synth1 = new Tone.Synth().toDestination();
const synth2 = new Tone.Synth().toDestination();


function setup() {
  
}

function draw() {
  
}

// when the mouse is pressed, trigger attack
function mousePressed(){
    synth1.triggerAttack(220);
  
    // pick a random pitch
	synth2.triggerAttackRelease(random(440, 880), 0.4);  
}
