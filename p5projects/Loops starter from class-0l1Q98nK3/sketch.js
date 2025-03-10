let loaded = false;

const bass = new Tone.Player({
  url: "loops/Bass0.mp3", 
  loop: true
});
bass.toDestination();

const chords = new Tone.Player({
  url: "loops/Chords0.mp3", 
  loop: true
});
chords.toDestination();

// const bass = new Tone.Player("loops/Bass0.mp3");
// bass.loop = true;

function setup() {  
  noCanvas();

}

function keyTyped(){
  if(loaded){
    bass.start();
    chords.start();
  }
}

function draw() {
  // not drawing anything for now
}

Tone.loaded().then(function(){  
  loaded = true;
});



