let synth = new Tone.PolySynth({
  "volume": -10,
  "envelope": {
    "attack": 0.1,
    "decay": 0.3,
    "release": 2,
  }
}).toMaster();

let bassNotes = ["A1", "B1"];
let currentNote = 0;
let synthLoop = new Tone.Loop(loopCallback, "1m");
function loopCallback(time) {  
  currentNote = (currentNote + 1) % 2;
  console.log(currentNote);
  synth.triggerAttackRelease(bassNotes[currentNote], "2n", time);
}

function setup() {
  synthLoop.start();
  Tone.Transport.start();
}
