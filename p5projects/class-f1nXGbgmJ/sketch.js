const synth = new Tone.PolySynth();
synth.toDestination();

let root = 24; // lowest A in MIDI
let octave = 2;
let major = [0, 2, 4, 5, 7, 9, 11];
let minor = [0, 2, 3, 5, 7, 9, 10];
let myScale = major; // try minor and other modes

function setup() {
  createCanvas(400, 400);  
}

function draw() {
  background(220);
}

function keyPressed(){
  let scalePos = int(key) - 1;
  let root = getNote(scalePos);
  let third = getNote(scalePos + 2);
  let fifth = getNote(scalePos + 4);
  
  console.log(root.toNote(), 
             third.toNote(), 
             fifth.toNote());
  
  synth.triggerAttackRelease(root, "8n");
  synth.triggerAttackRelease(third, "8n");
  synth.triggerAttackRelease(fifth, "8n");
}

// given a scale degree (pos), return the corresponding Tone.Frequency
function getNote(scalePos){
  let pos2 = scalePos % myScale.length; 
  let octave2 = octave + floor(scalePos / myScale.length);
  let midiNote = root + myScale[pos2] + octave2*12;
  return new Tone.Frequency(midiNote, "midi");
}


