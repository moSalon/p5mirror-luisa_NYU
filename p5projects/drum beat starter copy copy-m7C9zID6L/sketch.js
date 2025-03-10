// Create a 120BPM beat

// Create a Players object and load the drum kit files
const kit = new Tone.Players({
  "kick": "samples/505/kick.mp3", 
  "snare": "samples/505/snare.mp3",
  "hh": "samples/505/hh.mp3",
  "hho": "samples/505/hho.mp3"
});
kit.toDestination();


Tone.Transport.bpm.value = 126;
Tone.Transport.scheduleRepeat(playDrum, "4n");
Tone.Transport.start();
// console.log(Tone.Time("4n"));

// let bpm = 20;
let count 

function playDrum(time){
  kit.player("kick").start(time);
  // schedule playDrum to be called again, after an interval
  // let interval = 60/bpm;
  // Tone.Transport.schedule(playDrum, time + interval);
}

function setup(){
  createCanvas(200, 200); 
  background(0);
}

function draw(){
  
}

function keyPressed(){
  
}
