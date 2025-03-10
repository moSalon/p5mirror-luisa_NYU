const synth1 = new Tone.Synth().toDestination();
const synth2 = new Tone.Synth().toDestination();

let firstClick = true;

let root = 48;
let octave = 1;
let major = [0, 2, 4, 5, 7, 9, 11, 12];
let minor = [0, 2, 3, 5, 7, 9, 10, 12];
let myScale = major;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
}

function mousePressed(){
  if(firstClick){
    Tone.start();
    synth1.triggerAttack(getPitch(0, octave));
    firstClick = false;
  }
  // pick a random note within a scale, ranging 3 octaves
  let pos = int(random(0, myScale.length*3));
  synth2.triggerAttackRelease(getPitch(pos), 0.4);
}

function getPitch(pos){
  let scaleDegree = pos % myScale.length;
  let octave2 = octave + floor(scaleDegree / myScale.length);
  let midiNote = root + myScale[scaleDegree] + octave2*12;
  return new Tone.Frequency(midiNote, "midi");
}




