// The Code of Music
// NYU ITP/IMA Fall 2024
// Luisa Pereira

// Starter code for the Melody chapter

// Create a Synth instrument, which can play specific frequencies
const synth = new Tone.Synth();
synth.toDestination();

// let event = new Tone.Loop(callback, "8n");
// let event = new Tone.Sequence(callback, 
//                               [100, 200, 160, 340, 560],
//                               "8n"
//                              );
Tone.Transport.bpm.value = 300;
let event = new Tone.Part(callback, 
                              [
                                ["0:0:1", {"frequency":100, "duration": "32n"}], 
                                ["0:2:0", {"frequency":200, "duration": "16n"}], 
                                ["0:3:4",{"frequency":160, "duration": "32n"}]
                              ]
                             );

function callback(time, paramsObject){
  // let newPitch = random(100, 400);  
  synth.triggerAttackRelease(paramsObject.frequency, "16n", time);
}
event.start(0);
Tone.Transport.start();

event.probability = 1;
// event.humanize = "8n";
// event.mute = true;
event.loop = true;

// Create p5.js' setup function - this is just to make sure p5.js is initialized 
// and the event handlers we defined above (mousePressed, mouseReleased) are called
function setup() {
  createCanvas(200, 200);
}

function draw(){
  background(0);
}
