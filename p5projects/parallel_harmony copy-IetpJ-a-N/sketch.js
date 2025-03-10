let synth = new Tone.PolySynth();
synth.set({
  "volume": 0.3,
  "envelope": {
    "attack": 0.8,
    "release": 0.4
  }
})
synth.toMaster();


let major = [0, 2, 4, 5, 7, 9, 11, 12];
let minor = [0, 2, 3, 5, 7, 9, 10, 12];
let root = 21; // lowest A in MIDI
let octave = 2;
let myScale = major; // try minor and other modes


function keyPressed(){
  let scalePos = int(key) - 1;
  
  if(scalePos >=0){
    let root = getPitch(scalePos);
    synth.triggerAttackRelease(root, "8n");
    
    let third = getPitch(scalePos + 2);
    synth.triggerAttackRelease(third, "8n");
    
    let fifth = getPitch(scalePos + 4);
    synth.triggerAttackRelease(fifth, "8n");
  }
}


function getPitch(pos){
  let scaleDegree = pos % myScale.length;
  let octave2 = octave + floor(pos / myScale.length);
  let midiNote = root + myScale[scaleDegree] + octave2*12;
  return new Tone.Frequency(midiNote, "midi");
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 
}