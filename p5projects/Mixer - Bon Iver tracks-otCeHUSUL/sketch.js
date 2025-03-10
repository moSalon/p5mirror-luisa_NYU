
// load tracks
let players = [];
let sliders = [];

// players[0] = new Tone.Player("stems/blobtower.mp3");
// player.autostart = true;
// player.toDestination();

players[0] = new Tone.Player({
  url: "stems/blobtower.mp3",
  autostart: true
}).toDestination();

players[1] = new Tone.Player({
  url: "stems/brazen_mo.mp3",
  autostart: true
}).toDestination();

players[2] = new Tone.Player({
  url: "stems/breezy_point_rd.mp3",
  autostart: true
}).toDestination();

players[3] = new Tone.Player({
  url: "stems/lower_long_lake.mp3",
  autostart: true
}).toDestination();

function setup() {
  noCanvas();
  
  // create sliders
  for(i in players){
    sliders[i] = createSlider(-60, 0);
    sliders[i].input(volumeInput);
    sliders[i].id = i;
  }
}

function volumeInput(){
  // console.log(this.value());
  let i = this.id;
  players[i].volume.rampTo(this.value());
}

function draw() {
  background(220);
}
