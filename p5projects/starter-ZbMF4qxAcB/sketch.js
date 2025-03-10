let synth = new Tone.Synth();
synth.toDestination();

let chain = new Markov({
  "C2": [{"value": "C2", "probability":0.7}, {"value": "G2", "probability":0.3}],
  "G2": [{"value": "C2", "probability":0.7}, {"value": "G2", "probability":0.3}]
});
chain.value = "C2";

function setup(){
  
}

function draw(){
  
}

let toneLoop = new Tone.Loop(playNote, "8n");
toneLoop.start(0);
Tone.Transport.start();

function playNote(){
  let nextPitch = chain.next();
  synth.triggerAttackRelease(nextPitch, "16n");  
  
}

let sequence = ["A3", "B3", "C4", "A3", "B3", "C4", "C5"];
function learn(){
  // count how many times each note in the sequence transitions to each of the other notes 
  // calculate the probability of each transition
  
}