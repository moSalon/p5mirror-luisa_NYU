// load a track
let players = [];

players[0] = new Tone.Player("stems/blobtower.mp3");
players[0].autostart = true;
players[0].toDestination();

players[1] = new Tone.Player("stems/brazen_mo.mp3");
players[1].autostart = true;
players[1].toDestination();

players[2] = new Tone.Player("stems/breezy_point_rd.mp3");
player.autostart = true;
player.toDestination();



players[3] = new Tone.Player({
  url:"stems/lower_long_lake.mp3",
  autostart: true
}).toDestination();




// create a slider
let sliders = []; 

// connect the value of the slider to the volume of the track


function setup() {
  noCanvas();
  
  slider = createSlider(-60, 0);
  slider.input(volumeInput);
  
}

function draw() {
  background(220);
}

function volumeInput(){
  player.volume.rampTo(this.value());
}
