const synth1 = new Tone.Synth().toDestination();
const synth2 = new Tone.Synth().toDestination();

//let ratios = [1/1, 9/8, 5/4, 3/2, 5/3, 2/1];
let ratios = [1/1, 9/8, 5/4, 4/3, 3/2, 5/3, 15/8, 2/1];

function setup() {
  Tone.Transport.start();
  dl.start();
  ml.start();
}

function draw() {

}

let dl = new Tone.Loop(droneLoop, "2n");
let ml = new Tone.Loop(melodyLoop, "16n");
ml.probability = 0.6;

let f = 220;
function droneLoop(time){  
  // drone  
  synth1.triggerAttack(f);
}

function melodyLoop(time){
  // melody
  let pos = floor(random(0, ratios.length));  
  let pitch = f * ratios[pos];
  synth2.triggerAttackRelease(pitch); 
}


function mousePressed(){ 
   
}

function mouseReleased(){
  synth1.triggerRelease();
}


