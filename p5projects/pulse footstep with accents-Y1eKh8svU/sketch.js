let bpm = 120;
let interval = 60/bpm;
let count = -1;
let beat = 0;

let louder = 0;//db
let softer = -20 //db

// Create a Player object and load the "footstep.wav" file
const kick = new Tone.Player("samples/505/kick.mp3").toDestination();


// Create a loop that calls playDrum every second
const repeatEvent = new Tone.Loop(playDrum, interval);
repeatEvent.start(0);


function playDrum(time){    
  
  if(beat == 3){
    kick.volume.rampTo(louder);
  }
  else{
    kick.volume.rampTo(softer);
  }
  kick.start(time);   
  
  Tone.Draw.schedule(() => {    
    // Add 1 so 0 becomes 1, 1 becomes 2, etc.    
    count++; 
    beat = count % 4;
  }, time);
  
  
  
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
    text(beat + 1, width/2-10, height/2 );
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
