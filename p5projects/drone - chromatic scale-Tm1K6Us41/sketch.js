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


// MIDI numbers: https://www.midisolutions.com/Figure35.jpg
// Drone
let dronePitch = 48; // C3

// Melody
let minPitch = 60; // C5
let maxPitch = 72; // C6

let dl = new Tone.Loop(droneLoop, "2n");
function droneLoop(time){
  let velocity = random(0.4, 0.5);
  let tonePitch = Tone.Frequency(dronePitch, "midi");
  synth1.triggerAttackRelease(tonePitch, "2n", time, velocity);
}

let ml = new Tone.Loop(melodyLoop, "8n");
ml.probability = 0.6;
function melodyLoop(time){
  //pick a random pitch
  let pitch = floor(random(minPitch, maxPitch));
  let tonePitch = Tone.Frequency(pitch, "midi");
  let velocity = random(0, 0.5);
  synth2.triggerAttackRelease(tonePitch, 0.3, time, velocity);
}

function mousePressed(){
  Tone.Transport.start();
  dl.start();
  ml.start();
}

function setup() {
}

function draw() {
}