//sampling the sounds
let pianoSampler = new Tone.Sampler({
    "A4": "sounds/PianoA4.wav"
});
const vibrato = new Tone.Vibrato({frequency: 5, depth:1});
pianoSampler.connect(vibrato);
vibrato.wet.value = 1;
vibrato.toDestination();

function setup(){
  createCanvas(500,600);  
}

function draw(){  
  background(0);
  fill(255);
  text("vibrato depth:" + vibrato.depth.value, 10, 20);
  text("vibrato frequency:" + vibrato.frequency.value, 10, 30);
}

function keyPressed() {  
  if(loaded){
      vibrato.depth.value = map(mouseX, 0, width, 0, 1);
      vibrato.frequency.rampTo(map(mouseY, 0, height, 2, 20));
      pianoSampler.triggerAttack("C4");
    }
}

function keyReleased(){
  pianoSampler.triggerRelease("C4");
}


Tone.loaded().then(function() {
  loaded = true;
});
