let sampler1;
let sampler2;
let meter1;
let meter2;

let open;
let closed;

let popcat_bass = 0;

function preload() {
  popcatC = loadImage('imgs/pop_cat_closed.png');
  popcatO = loadImage('imgs/pop_cat_open.png');
}

sampler1 = new Tone.Sampler({
    A3: "marimba.wav",
  });
sampler1.toMaster();

meter1 = new Tone.Meter();
sampler1.connect(meter1);


Tone.Transport.bpm.value = 218;

//////////////// BASS ////////////////
var bassSynth = new Tone.Synth().toMaster();
bassSynth.set({
    "volume": 0.05,
    "envelope": {
      "attack": 0.1,
      "decay": 0.1,
      "sustain": 0.5,
      "release": 1
    }
  });

var bassPart = new Tone.Part(playBass, [
  ["0:0", ["E3", "A3"]],
  ["2:0", ["D3", "B3"]]
]);
bassPart.loop = true;
bassPart.loopEnd = "4m";
let i = 0; 
function playBass(time, bass) {
  console.log(i++);
  console.log('bass chords', bass);

  bassSynth.triggerAttackRelease(bass[0], "2n");
  bassSynth.triggerAttackRelease(bass[1], "2n");
  // bassSynth.triggerAttackRelease(bass[2], "2n");

  popcat_bass = 1;
}

//////////////// PIANO (synth) ////////////////
var synth = new Tone.PolySynth().toMaster();
synth.set({
  "volume": 0.2,
  "envelope": {
    "attack": 0.02,
    "decay": 0.1,
    "sustain": 0.5,
    "release": 1
  }
});
var first_chord = ["A3", "C#4", "E4", "G#4"];
var second_chord = ["F#4", "E4", "C#4", "A3"];
var third_chord = ["B3", "D4", "F#4", "A4"];
var last_note = ["G#4", "E3", "F#3", "G#3"];

var arpeggio = new Tone.Pattern(function (time, chord) {
  synth.triggerAttackRelease(chord, "8n", time);
});
arpeggio.values = first_chord;

var pianoPart = new Tone.Part(function (time, chord) {
  arpeggio.values = chord;
  arpeggio.pattern = "up";
}, [
  ["0:0", first_chord],
  ["1:0", second_chord],
  ["2:0", third_chord],
  ["3:0", last_note],
  ["5:0", first_chord],
  ["6:0", second_chord],
  ["7:0", third_chord],
  ["8:0", last_note],
]);

var catLoop = new Tone.Loop(function (time) {
  popcat_bass = 0;
}, "2m");



Tone.Transport.schedule(function (time) {
  pianoPart.start(time);
  arpeggio.start(time);
  bassPart.start(time);
  catLoop.start();
});

pianoPart.loop = true;
pianoPart.loopEnd = "4m";

arpeggio.loop = true;
arpeggio.loopEnd = "4m"

function setup() {
  Tone.Transport.start();
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  // Draw the image
  if (popcat_bass == 1) {
    image(popcatO, windowWidth/7, 512, 50, 50);
    image(popcatO, windowWidth * 6/7, 512, 50, 50);
  } else {
    image(popcatC, windowWidth/7, 512, 50, 50);
    image(popcatC, windowWidth * 6/7, 512, 50, 50);
  }
}

