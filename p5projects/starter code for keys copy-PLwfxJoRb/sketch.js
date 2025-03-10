let synth = new Tone.PolySynth();
synth.set({
  "volume": 0.2,
  "envelope": {
    "attack": 0.02,
    "decay": 0.1,
    "release": 0.5
  }
})
synth.toDestination();

function setup() {
  createCanvas(400, 400);  
}

function draw() {
  background(220);
}

let root = 21; // lowest A in MIDI
let scale = [];


function keyPressed(){  
  let offset = int(key) - 1;
  if(offset >=0 ){
    let midiPitch = root + offset;
    let pitch = new Tone.Frequency(midiPitch, "midi");
    synth.triggerAttackRelease(pitch, "8n");
    
    // add a second note
    
    
    // add a third note
  }
  

  
}

