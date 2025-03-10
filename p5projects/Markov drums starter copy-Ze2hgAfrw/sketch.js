let drumNames = ["kick", "snare", "hh", "hho"];
let kit = new Tone.Players({
  "kick": "/samples/kick.mp3",
  "snare": "/samples/snare.mp3",
  "hh": "/samples/hh.mp3",
  "hho": "/samples/hho.mp3"
}).toDestination();



function setup() {
  
}

function mouseClicked(){
  kit.player("kick").start();
}
