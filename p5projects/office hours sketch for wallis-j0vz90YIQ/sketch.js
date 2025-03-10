// Create a 120BPM beat

// Create a Players object and load the drum kit files
const kit = new Tone.Players({
  "kick": "samples/505/kick.mp3", 
  "snare": "samples/505/snare.mp3",
  "hh": "samples/505/hh.mp3",
  "hho": "samples/505/hho.mp3"
});
kit.toDestination();

// 60 beats per minute => 1 beat per second
// each beat is 1s long
// Tone.Transport.bpm.value = 60;
// console.log(Tone.Time("4n").toSeconds());

// 120 beats per minute => 2 beat per second
// each beat is 0.5s long
// Tone.Transport.bpm.value = 120;
// console.log(Tone.Time("4n").toSeconds());

// 240 beats per minute => 4 beat per second
Tone.Transport.bpm.value = 240;
console.log(Tone.Time("4n").toSeconds());

function setup(){
  createCanvas(200, 200); 
  background(0);
}

function draw(){
  
}
