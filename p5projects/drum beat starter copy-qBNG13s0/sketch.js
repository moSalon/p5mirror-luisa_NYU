
const kit = new Tone.Players({
  "kick": "samples/505/kick.mp3", 
  "snare": "samples/505/snare.mp3"
});
kit.toDestination();

let bpm = 60;

const repeatEvent = new Tone.Loop(playDrum,1);
repeatEvent.start(0);

function playDrum(){
  kit.player("kick").start();
}

function keyPressed(){
  Tone.Transport.start();
}

function setup(){
  createCanvas(200, 200); 
  background(0);
}

function draw(){
  
}
