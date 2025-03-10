
const sound = new SimplePlayer("sounds/congas.m4a");
sound.loop = true;
let panner = new Tone.Panner();
sound.connect(panner);
panner.toDestination();
sound.autostart = true;

let slider;
function setup(){
  createCanvas(600,600);
  snitch.style('z-index', 20);
  slider = createSlider(-1, 1, 0, 0.1);
  slider.input(update);
}

function draw(){
  snitch.style("")
}

function update(){
  console.log(slider.value());
  panner.pan.value = slider.value();
}

