// Create a 120BPM beat


let cells = [
    [0, 1, 0, 1],
    [1, 0, 1, 0]
  ];
let kickPattern = 

// Create a Players object and load the drum kit files
const kit = new Tone.Players({
  "kick": "samples/505/kick.mp3", 
  "snare": "samples/505/snare.mp3",
  "hh": "samples/505/hh.mp3",
  "hho": "samples/505/hho.mp3"
});
kit.toDestination();

const repeatEvent = new Tone.Loop(playDrum, "4n");
repeatEvent.start(0);

function playDrum(time){
  
  
  let beat = Tone.Transport.position.split(":")[1];
  
  if(cells[0]){
    
  }
  else{
    kit.player("snare").start(time);
    kit.player("kick").start(time);
  }
  
}

function setup(){
  createCanvas(200, 200); 
  background(0);
}

function draw(){
  
}

function keyPressed(){
  Tone.Transport.start();
}
