var synth = new Tone.PolySynth().toMaster();
Tone.Transport.bpm.value = 240;

var pianoPart = new Tone.Part(playNote, [
    ["0:0", "A3"],
    ["0:2", "C#4"],
    ["0:4", "E4"],
    ["1:2", "G#4"],
    ["1:4", "B4"],
    ["2:2", "D4"],
    ["2:4", "F#4"],
    ["3:2", "A4"],
  ])
  pianoPart.loop = true;
  pianoPart.loopEnd = "2m";


var bassPart = new Tone.Part(playBass, [
    ["0:0", ["A1", "C2", "E2"]],
    ["2:0", ["A2", "C3", "E3"]]
  ]);
  bassPart.loop = true;
  bassPart.loopEnd = "4m";


function playNote(time, chord){  
  synth.triggerAttackRelease(chord[0], "2n");
}

function playBass(time, BLAH){
  
  synth.triggerAttackRelease(BLAH[0], "2n");
  synth.triggerAttackRelease(BLAH[1], "2n");
  synth.triggerAttackRelease(BLAH[2], "2n");
}
function setup() {
  pianoPart.start();
  bassPart.start();
  Tone.Transport.start();
}

function draw() {

}
