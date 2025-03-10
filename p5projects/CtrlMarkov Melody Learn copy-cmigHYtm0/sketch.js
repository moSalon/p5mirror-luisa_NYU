let keys = new Tone.Synth();
keys.toDestination();

let chain = new Markov();

function preload(){
  loadJSON("bach_prelude_3.json", loaded, error);
}

function loaded(d){
  let sequence = [];
  //load first track into sequence
  for(var i = 0; i < d.tracks[0].notes.length; i++){
    var note = d.tracks[0].notes[i];
    sequence.push(note.midi);
  }
  chain.learn(sequence);
  chain.value = sequence[0];
}

function error(e){
  console.log("Error loading file", e);
}

function setup() {
  
}

let loop = new Tone.Loop(playNote, "16n");
function playNote(){
  let nextPitch = new Tone.Frequency(chain.next(), "midi");
  keys.triggerAttackRelease(nextPitch, "16n");
}
Tone.Transport.start();
loop.start();
