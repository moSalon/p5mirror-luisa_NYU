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

// let scale = ["C1", "D1", "E1", "F1", "G1", "A1", "B1", "C2"];
let scale = [24, 26, 28, 29, 31, 33, 35, 37, 38];


function keyPressed(){  
  let offset = int(key) - 1;
  if(offset >=0 ){
    let midiPitch = scale[offset];
    let pitch = Tone.Frequency(midiPitch, "midi");
    synth.triggerAttackRelease([pitch], "8n");
    
    // add a second note
    
    
    // add a third note
  }
  

  
}

