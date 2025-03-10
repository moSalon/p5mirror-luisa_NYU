
const synth1 = new Tone.Synth().toDestination();
const synth2 = new Tone.Synth().toDestination();

let root = 48;
let octave = 1;
let major = [0, 2, 4, 5, 7, 9, 11, 12];
let minor = [0, 2, 3, 5, 7, 9, 10, 12];
let myScale = major;

let rootNote = new Tone.Frequency(root, "midi");
let firstClick = true;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
}

function mousePressed(){
  if(firstClick){
    Tone.start();
    synth1.triggerAttack(rootNote);
    firstClick = false;
  }
  // pick a random note
  let pos = int(random(0, myScale.length));
  let note = root + myScale[pos] + octave*12;
  let noteObject = Tone.Frequency(note, "midi");  
  synth2.triggerAttackRelease(noteObject, 0.4);
}


