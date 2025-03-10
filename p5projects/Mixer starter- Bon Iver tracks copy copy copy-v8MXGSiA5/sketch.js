// load a track
let player = new Tone.Player("stems/blobtower.mp3");
player.autostart = true;
player.toDestination();

function setup() {
  noCanvas(); 
}

function draw() {
  background(220);
}

