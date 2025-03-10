let bpm = 120;
let interval = 60/bpm;
let count = 0;
let beat = 0;
let measure = 0; 

let louder = 0;//db
let softer = -20 //db

// Create a Player object and load the "footstep.wav" file
const kick = new Tone.Player("samples/footstep.wav").toDestination();
kick.volume.value = louder;


// Create a loop that calls playDrum every second
const repeatEvent = new Tone.Loop(playDrum, interval);
repeatEvent.start(0);


function playDrum(time){  
  // set volume for next beat,
  // making beat 0 strong
  if(beat == 3){       kick.volume.rampTo(louder);
  }
  else{    kick.volume.rampTo(softer);
  }  
  kick.start(time);   
     
  count++; 
  beat = count % 4;
  measure = floor(count/4);
  
  console.log(measure + ":" +  beat);
  
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
