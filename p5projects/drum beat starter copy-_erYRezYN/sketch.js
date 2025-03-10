// Create a 120BPM beat

// Create a Players object and load the drum kit files
const kit = new Tone.Players({
  "kick": "samples/505/kick.mp3", 
  "snare": "samples/505/snare.mp3",
  "hh": "samples/505/hh.mp3",
  "hho": "samples/505/hho.mp3"
});
kit.toDestination();

Tone.Transport.schedule(playDrum, 0);
Tone.Transport.start();

let bpm = 20;

function playDrum(time){
  kit.player("kick").start(time);
  // schedule playDrum to be called again, after an interval
  let interval = 60/bpm;
  Tone.Transport.schedule(playDrum, time + interval);
}

function setup(){
  createCanvas(200, 200); 
  background(0);
}

function draw(){
  
}

function keyPressed(){
  
}
