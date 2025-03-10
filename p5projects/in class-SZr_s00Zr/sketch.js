Tone.Transport.bpm.value = 240;
let synth = new Tone.PolySynth().toDestination();
let event = new Tone.Pattern(callback,
                          ["C3", "C#3", "D3", "F3"], 
                          "randomWalk"
                         );

// event.at("4n", "G4");
event.start(0);
Tone.Transport.start();

event.loop = true;
event.probability = 0.7;
// event.humanize = "32n";

function callback(time, pitch){
  synth.triggerAttackRelease("C5", "16n", time, random(0.3, 0.8));
  synth.triggerAttackRelease(pitch, "16n", time, random(0.3, 0.8));
}

function setup(){
  
}
