let n = 6;
let osc = new Tone.Oscillator(261.63, "triangle");
osc.volume.value = -12;
osc.start();
osc.partials = [0.5, 0.25];

let ampEnv = new Tone.AmplitudeEnvelope({
  "attack": 0.2,
  "decay": 0.03,
  "sustain":1, 
  "release":0.8
});
osc.connect(ampEnv);
ampEnv.toDestination();

function setup() {
  createCanvas(400, 100);
}
function draw() {
  background(255);
}

function mouseClicked(){
  let p = [];
  for(let i = 0; i < 6; i++){
    p[i] = random();
  }
  osc.partials = p;
}

function keyPressed(){
  ampEnv.triggerAttack();
}

function keyReleased(){
  ampEnv.triggerRelease();
}

