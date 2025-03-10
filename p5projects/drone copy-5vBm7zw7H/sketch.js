const synth1 = new Tone.Synth();
synth1.toDestination();
synth1.set({
  "envelope": {
    "attack": 0.2,
    "release": 0.4
  }
})

const synth2 = new Tone.Synth();
synth2.toDestination();
synth2.set({
  "envelope": {
    "attack": 0.02,
    "release": 0.03
  }
})

let dl = new Tone.Loop(droneLoop, "2n");
function droneLoop(time){
  let velocity = random(0.4, 0.5);
  synth1.triggerAttackRelease(getPitch(0), "2n", time, velocity);
}

let ml = new Tone.Loop(melodyLoop, "8n");
ml.probability = 0.6;
function melodyLoop(time){
  //pick a random pitch
  let pos = floor(random(0, myScale.length));
  let velocity = random(0, 0.5);
  synth2.triggerAttackRelease(getPitch(pos+12), 0.3, time, velocity);
}

//Melody
let root = 21; // lowest A in MIDI
let major = [0, 2, 4, 5, 7, 9, 10, 12]; 
let minor = [0, 2, 3, 5, 7, 9, 10, 12];
let octave = 2;
let myScale = major; // try minor and other modes

function mousePressed(){
  Tone.Transport.start();
  dl.start();
  ml.start();
}

function getPitch(pos){
  let scaleDegree = pos % myScale.length;
  let octave2 = octave + floor(pos / myScale.length);
  let midiNote = root + myScale[scaleDegree] + octave2*12;
  return new Tone.Frequency(midiNote, "midi");
}

function setup() {
}

function draw() {
}