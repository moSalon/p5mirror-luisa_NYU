// The Code of Music
// Luisa Pereira
// http://thecodeofmusic.net/

// Create a 120BPM beat

// Create a Players object and load the drum kit files
const kit = new Tone.Players({
  "kick": "samples/505/kick.mp3", 
  "snare": "samples/505/snare.mp3",
  "hh": "samples/505/hh.mp3",
  "hho": "samples/505/hho.mp3"
});
kit.toDestination();

function setup(){
  createCanvas(200, 200); 
  background(0);
}

function draw(){
  
}

