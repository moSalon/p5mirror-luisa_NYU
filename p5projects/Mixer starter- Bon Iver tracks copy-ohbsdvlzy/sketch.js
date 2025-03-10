let players = [];
let sliders = [];

// load a track
players[0] = new Tone.Player("stems/blobtower.mp3");
players[0].autostart = true;
players[0].toDestination();

// load a track
players[1] = new Tone.Player("stems/brazen_mo.mp3");
players[1].autostart = true;
players[1].toDestination();

// load a track
players[2] = new Tone.Player("stems/breezy_point_rd.mp3");
players[2].autostart = true;
players[2].toDestination();

// load a track
players[3] = new Tone.Player("stems/lower_long_lake.mp3");
players[3].autostart = true;
players[3].toDestination();

// create a slider
let slider;



function setup() {
  noCanvas();
  
  slider = createSlider(-60, 0);
  slider.input(  volumeInput   )
}

// connect the value of the slider to the volume of the track
function volumeInput(){
  // player.volume.value = slider.value();
  player.volume.rampTo(slider.value());
}

function draw() {
  background(220);
}
