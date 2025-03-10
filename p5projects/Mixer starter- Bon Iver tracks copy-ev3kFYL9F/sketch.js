// load a track
let player = new Tone.Player("stems/blobtower.mp3");
player.autostart = true;
player.toDestination();

// create a slider 
let slider;

// event handler for the input event of the slider
function volumeInput(){
  player.volume.value = this.value();
}

function setup() {
  noCanvas();
  //0: neutral
  //-6db: half the volume
  //-12: quarter of the volume
  slider = createSlider(-60, 0);
  
  // connect the value of the slider to the volume of the track
  slider.input(volumeInput);
}

function draw() {
  background(220);
}
