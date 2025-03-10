//sampling the sounds
let synth = new Tone.FMSynth();
const tremolo = new Tone.Tremolo({frequency: 9, depth:0.75});
tremolo.start();
synth.connect(tremolo);
// tremolo.wet.value = 1;
tremolo.toDestination();

function setup(){
  createCanvas(500,600);  
}

function draw(){  
  background(0);
  fill(255);
  tremolo.depth.rampTo(map(mouseX, 0, width, 0, 1));
  tremolo.frequency.rampTo(map(mouseY, 0, height, 2, 20));
  text("tremolo depth:" + tremolo.depth.value, 10, 20);
  text("tremolo frequency:" + tremolo.frequency.value, 10, 30);
}

function keyPressed() {        
  synth.triggerAttack("C4");  
}

function keyReleased(){
  synth.triggerRelease("C4");
}
