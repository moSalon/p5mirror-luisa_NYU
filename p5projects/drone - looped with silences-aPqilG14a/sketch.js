let synth1 = new Tone.Synth().toDestination();
let synth2 = new Tone.Synth().toDestination();

// 22 Srutti system subset: Madhyama Grama 
let factors = [9/8, 5/4, 4/3, 3/2, 5/3, 15/8, 2/1];
let refPitch = 195.99771799087463; // G3 
let root = refPitch * 3/2;

//Drone
let dl = new Tone.Loop(droneLoop, "2n");
function droneLoop(time) {
  synth1.triggerAttackRelease(root, "2n", time);
}

let ml = new Tone.Loop(melodyLoop, "16n");
ml.probability = 0.6;
function melodyLoop(time) {
  // pick a random note within the scale
  // to do: range 3 octaves
  let pos = int(random(0, factors.length));
  let pitch = refPitch*factors[pos];
  synth2.triggerAttackRelease(pitch, "16n", time);
}

let firstClick = true;
function mousePressed(){
  if(firstClick){
    Tone.Transport.start();
    firstClick = false;
  }
  dl.start();
  ml.start();
}

function setup() {

}

function draw() {

}
