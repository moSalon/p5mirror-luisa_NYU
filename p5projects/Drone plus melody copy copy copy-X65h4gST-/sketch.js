let synth = new Tone.PolySynth();
synth.toDestination();

//Melody
let major = [0, 2, 4, 5, 7, 9, 10, 12];
let root = 36; // lowest A in MIDI
let octave = 2;
let myScale = major; // try minor and other modes

let firstClick = true;

let ml = new Tone.Loop(melodyLoop, "8n");
function melodyLoop(time) {
  // pick a random note within a scale, ranging 3 octaves
  let pos = int(random(0, myScale.length*3));
  synth.triggerAttackRelease(getPitch(pos), "16n", time);
}

// Start
function mousePressed(){
  if(firstClick){
    Tone.start();
    Tone.Transport.start();
    synth.triggerAttack(getPitch(0));
    firstClick = false;
  }
  ml.start();
}

function getPitch(pos){
  let scaleDegree = pos % myScale.length;
  let octave2 = octave + floor(scaleDegree / myScale.length);
  let midiNote = root + myScale[scaleDegree] + octave2*12;
  return new Tone.Frequency(midiNote, "midi");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  synth.set({
    "envelope": {
      "attack": map(mouseX, 0, width, 0.2, 0.8),
      "release": map(mouseY, 0, width, 0.2, 0.8),
    }
  });
}
