// load a track
const player = new Tone.Player("stems/blobtower.mp3");
player.autostart = true;
player.toDestination();




let slider; 
function setup() {
  noCanvas();
  // create a slider
  // 0: neutral
  // -6db: half of the volume
  // - 12db: quarter of the volume 
  slider = createSlider(-60, 0);
  slider.input( volumeInput )
  
  


  
}

function volumeInput(){
  // connect the value of the slider to the volume of the track
  // player.volume.value = this.value();
  player.volume.rampTo(this.value());
  
  // console.log(this.value());
}

function draw() {
  background(220);
}
