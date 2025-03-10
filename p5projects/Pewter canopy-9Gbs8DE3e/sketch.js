// let synth = Tone.Synth
let synth = Tone.PolySynth(Tone.Synth, 24);
// let pitch = new Tone.Frequency(60, "midi");




let minNote = 60;
let cuadrados = [
  [{on: false, pitch:0}, {on: true, pitch:0}],
  [{on: false, pitch:0}, {on: false, pitch:0}]
];

function setup() {
  createCanvas(400, 400);
  
  cuadrados[0][1].pitch = 26;
  let test = cuadrados[0][1].pitch; 
  console.log(test)
}

function draw() {
  background(220);
}