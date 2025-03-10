let synth1 = new Tone.Synth().toDestination();
let synth2 = new Tone.Synth().toDestination();

// 22 Srutti system subset: Madhyama Grama 
let factors = [9/8, 5/4, 4/3, 3/2, 5/3, 15/8, 2/1];

// when the mouse is pressed, trigger attack
function mousePressed(){
    let f1 = 195.99771799087463; // G3 
  
    let randomIntervalFactor = floor(random(1, factors.length));
    let f2 = f1*randomIntervalFactor;
  
    synth2.triggerAttack(f1 * 3 / 2); //in this subset, root is 3/2
    synth1.triggerAttack(f2);
}

function setup() {

}

function draw() {

}
