let synth = new Tone.PolySynth();
synth.set({
  "envelope": {
    "attack": 0.04,
    "release": 0.4
  }
})
synth.toDestination();

//Drone
let dl = new Tone.Loop(droneLoop, "1m");
function droneLoop(time) {
  synth.triggerAttackRelease(getPitch(0), "4m", time);
}

//Melody
let ml = new Tone.Loop(melodyLoop, "8n");
// stay silent sometimes
ml.probability = 0.6;

let major = [0, 2, 4, 5, 7, 9, 11, 12];
let minor = [0, 2, 3, 5, 7, 9, 10, 12];

let root = 21; // lowest A in MIDI
let octave = 2;
let myScale = major; // try minor and other modes


function melodyLoop(time) {
    // pick a random note within a scale, ranging 3 octaves
  let pos = int(random(0, myScale.length*4));
  synth.triggerAttackRelease(getPitch(pos), "16n", time);
}

// Start
function mouseClicked() {
  if (Tone.context.state !== 'running')   {
    Tone.context.resume();
  }
  // Tone.start();
  Tone.Transport.start();
  dl.start();
  ml.start();
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  synth.set({
    "envelope": {
      "attack": map(mouseX, 0, width, 0.01, 0.4),
      "release": map(mouseY, 0, width, 0.01, 0.8),
    }
  });
}


function getPitch(pos){
  let scaleDegree = pos % myScale.length;
  let octave2 = octave + floor(scaleDegree / myScale.length);
  let midiNote = root + myScale[scaleDegree] + octave2*12;
  return new Tone.Frequency(midiNote, "midi");
}