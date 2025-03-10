// The Code of Music
// Luisa Pereira
// http://thecodeofmusic.net/

// Create a Player object and load the "footstep.wav" file
const footstep = new Tone.Player("samples/footstep.wav").toDestination();

// Create a loop that calls playDrum every second
const repeatEvent = new Tone.Loop(playDrum, 1);
// Schedule it to start at the beginning of the Transport timeline 
repeatEvent.start(0);

function playDrum(time){
  footstep.start(time);  
}

// Interface: p5 functions
let toggleState = "start";
function setup(){
  createCanvas(300, 300);
}

function draw(){
  background(255);
  text("hit any key to " + toggleState, 20, 20);
}
function keyPressed(){
  if(Tone.loaded && Tone.Transport.state == "stopped"){
    Tone.Transport.start();
    toggleState = "stop";
  }
  else{
    Tone.Transport.stop();
    toggleState = "start"
  }
}
