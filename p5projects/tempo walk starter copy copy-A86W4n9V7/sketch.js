Tone.Transport.bpm.value = 75;
Tone.Transport.timeSignature = [3,4];

//volume levels
let louder = 0;
let softer = -20;

const repeatEvent = new Tone.Loop(playDrum, "4n");
repeatEvent.start(0);

function playDrum(time){
  footstep.start(time);
  let beat = Tone.Transport.position.split(":")[1];
  console.log(beat);
  if(beat == 1){
    footstep.volume.rampTo(louder);
  }
  else{
    footstep.volume.rampTo(softer);
  }
  
  
}

// Create a Player object and load the "footstep.wav" file
const footstep = new Tone.Player("samples/39044__wildweasel__wood3.wav").toDestination();

function setup(){
  createCanvas(300, 300);
}

function draw(){
  background(255);
}

function keyPressed(){
  Tone.Transport.start();
}

