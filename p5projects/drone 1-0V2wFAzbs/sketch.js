let synth1 = new Tone.Synth().toDestination();

function setup() {

}

function draw() {

}

// when the mouse is pressed, trigger attack
function mousePressed(){
    synth1.triggerAttack(220);
}
