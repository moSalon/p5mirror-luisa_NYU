const synth1 = new Tone.Synth();
synth1.toDestination();

const synth2 = new Tone.Synth();
synth2.toDestination();


let ml = new Tone.Loop(loop, "2n");
// ml.probability = 0.6;
function loop(){
  //pick a random pitch
  let pos = floor(random(0, myScale.length));
  let melodyPitch = getPitch(pos - 24);
  synth2.triggerAttackRelease(melodyPitch, 0.3);
  
  //drone
  let dronePitch = melodyPitch.toMidi() + 7;
  synth1.triggerAttackRelease(new Tone.Frequency(dronePitch, "midi"), 0.3);
}

//Melody
let root = 21; // lowest A in MIDI
let major = [0, 2, 4, 5, 7, 9, 10, 12]; 
let octave = 2;
let myScale = major; // try minor and other modes


function setup() {

}

function draw() {

}


function mousePressed(){
  Tone.Transport.start();
  ml.start();
}

function getPitch(pos){
  let scaleDegree = pos % myScale.length;
  let octave2 = octave + floor(pos / myScale.length);
  let midiNote = root + myScale[scaleDegree] + octave2*12;
  return new Tone.Frequency(midiNote, "midi");
}
