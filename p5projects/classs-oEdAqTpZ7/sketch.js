
let synth1 = new Tone.PolySynth();
synth1.toDestination();

// let synth2 = new Tone.Synth().toDestination();

// let dl = new Tone.Loop(droneLoop, "2n");
// function droneLoop(){
    
// }

let ml = new Tone.Loop(melodyLoop, "8n");
function melodyLoop(time){
  let p = random();
  // melody
  let pos = floor(random(0, myScale.length));
  let pitch = root + myScale[pos] + octave*12;    
  let pitchObject = Tone.Frequency(pitch, "midi");
  if(p < 0.6){    
    synth1.triggerAttackRelease(pitchObject, 0.3);
  }
  // drone
  let dronePitch = pitch + 7 - 12;
  let dronePitchObject = Tone.Frequency(dronePitch, "midi");
  synth1.triggerAttackRelease(dronePitchObject, 0.3);
}

//Melody
let root = 21; // lowest A in MIDI
let major = [0, 2, 4, 5, 7, 9, 10, 12];
let minor = [0, 2, 3, 5, 7, 9, 10, 12];
let octave = 2;
let myScale = minor; // try minor and other modes



function setup()
{
  createCanvas(200, 200);
}

function draw(){  
  background(0);
  
  // synth1.envelope.attack = map(mouseX, 0, width, 0.1, 0.8);
  // synth1.envelope.release = map(mouseY, 0, height, 0.1, 0.8)
  
}

let firstClick = true;
function mousePressed(){
  if(firstClick){
    ml.start(0);
    Tone.Transport.start();
    firstClick = false;
  }
  
}
