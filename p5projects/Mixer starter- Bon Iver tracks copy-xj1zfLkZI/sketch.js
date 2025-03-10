
// load tracks
let players = [];
let sliders = [];

player = new Tone.Sampler({	urls: {"A1": "stems/breezy_point_rd.mp3"}});
player.autostart = true;
player.toDestination();

function setup() {
  noCanvas();
}

function mousePressed(){
  player.triggerAttack("A1");
}

function draw() {
  background(220);
}
