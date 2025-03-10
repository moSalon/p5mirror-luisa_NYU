let bpm = 120;
let interval = 60/bpm;


// Create a Player object and load the "footstep.wav" file
const kick = new Tone.Player("samples/footstep.wav").toDestination();


// Create a loop that calls playDrum every second
const repeatEvent = new Tone.Loop(playDrum, interval);
repeatEvent.start(0);

let count = -1;
let beat;
function playDrum(time){
    kick.start(time); 
  console.log("playDrum: ",count,  beat);
  count++;
  beat = count%4;
}

// Interface: p5 functions
let toggleState = "start";
function setup(){
  createCanvas(300, 300);
}

function draw(){
  background(255);
  textSize(12);
  text("hit any key to " + toggleState, 20, 20);
  if(beat >= 0){
    textSize(24);
    text(beat, width/2-10, height/2 );
  }
  
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
