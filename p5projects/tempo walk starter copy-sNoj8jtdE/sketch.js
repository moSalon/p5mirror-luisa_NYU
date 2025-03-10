

// Create a Player object and load the "footstep.wav" file
const footstep = new Tone.Player("samples/footstep.wav").toDestination();

Tone.Transport.bpm.value = 120;
Tone.Transport.timeSignature = [4, 4];
const repeatEvent = new Tone.Loop(playDrum, "4n");
repeatEvent.start(0);

function playDrum(time){
  footstep.start(time);
  
  let measure = int(Tone.Transport.position.split(":")[0]);
  let beat = int(Tone.Transport.position.split(":")[1]);
  let sixteenths = int(Tone.Transport.position.split(":")[2]);
  
  if(beat == 0 || beat == 2){
    kit.player("kick").start(time);
  }
  else if(beat == 1 || beat == 3){
    kit.player("snare").start(time);
  }
  
}

function setup(){
  createCanvas(300, 300);
}

function draw(){
  background(255);
}

// start the Transport timeline
function keyPressed(){
  Tone.Transport.start();
}

