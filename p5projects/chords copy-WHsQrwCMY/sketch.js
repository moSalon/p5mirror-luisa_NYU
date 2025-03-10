var synth = new Tone.PolySynth().toMaster();
Tone.Transport.bpm.value = 180;

var C_chord = ["C3", "E3", "G3", "C4"];
var F_chord = ["F2", "C3", "F3", "A3"];
var G_chord = ["G2", "D3", "G3", "B3"];
let currentChord = C_chord;

var customArpeggio = new Tone.Part(playArpeggio, [
  ["0:0", [0]],
  ["0:1", [1]],
  ["0:2", [1, 2, 3]],
  ["0:3", [1]],
]).start();
customArpeggio.loop = true;
customArpeggio.loopEnd = "1m";

var pianoPart = new Tone.Part(setChord, [
  ["0:0", F_chord],
  ["1:0", F_chord],
  ["2:0", C_chord],
  ["3:0", G_chord],
  ["4:0", C_chord],
  ["5:0", F_chord],
  ["6:0", C_chord],
  ["7:0", G_chord],
  ["8:0", C_chord]
]).start();

pianoPart.loop = true;
pianoPart.loopEnd = "4m";

function setChord(time, chord) {
  currentChord = chord;  
}

function playArpeggio(time, notePositions) {
  let notes = [];
  for(let i = 0; i < notePositions.length; i++){
    notes.push(currentChord[notePositions[i]]);
  }  
  synth.triggerAttackRelease(notes, "8n");
  console.log(notes);
}

// Alternatively, you could let the user pick different chords via key presses
function keyPressed(){
  if(key == '1'){
    //
  }
  
}

function setup() {
  Tone.Transport.start();
  pianoPart.start();
  customArpeggio.start();

}

function draw() {

}