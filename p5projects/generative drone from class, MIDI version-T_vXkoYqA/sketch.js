const synth1 = new Tone.Synth().toDestination();
const synth2 = new Tone.Synth().toDestination();

//let ratios = [1/1, 9/8, 5/4, 3/2, 5/3, 2/1];
// let ratios = [1/1, 9/8, 5/4, 4/3, 3/2, 5/3, 15/8, 2/1];

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

let root = 21; // C3
let octave = 2;
let major = [0, 2, 4, 5, 7, 9, 11];
let minor = [0, 2, 3, 5, 7, 9, 10];

let myScale = major; 


function droneLoop(time){  
  // drone  
  let tonePitch = Tone.Frequency(root + 12*octave, "midi");
  synth1.triggerAttack(tonePitch);
}

function melodyLoop(time){
  // melody
  let pos = floor(random(0, myScale.length * 2));  
  let pitch = getPitch(pos);
  synth2.triggerAttackRelease(pitch); 
}

function getPitch(pos){
  let scaleDegree = pos % myScale.length; 
  let octave2 = octave + floor(pos / myScale.length); 
  let midiNote = root + myScale[scaleDegree] + octave2*12;
  return new Tone.Frequency(midiNote, "midi");
}


function mousePressed(){ 
   
}

function mouseReleased(){
  synth1.triggerRelease();
}


