// Press a key to play kick drum

// Create a Player object and load the "kick.mp3" file
const kit = new Tone.Players({
  "kick": "samples/505/kick.mp3", 
  "snare": "samples/snare.mp3"
});
kit.toDestination();

function keyPressed(){
  
  // Make sure the sound file has been completely loaded
  if(kit.loaded){
    // set volume to be highest at the center, lowest towards the edges
    let vol = map(dist(mouseX, mouseY, width/2,height/2), 0, height/2, 0, -20);
    kit.volume.value = vol;
    kit.player("kick").start();
  }
}

function setup(){
  createCanvas(200, 200); 
  background(0);
}

function draw(){
  
}

