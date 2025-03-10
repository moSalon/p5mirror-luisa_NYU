let loaded = false;

const bass = new Tone.Player({
  url: "loops/Bass0.mp3",
  loop: true
});
bass.toDestination();

const chords = new Tone.Player({
  url: "loops/Chords0.mp3",
  loop: true,
});
chords.toDestination();

const drums = new Tone.Player({
  url: "loops/Drums0.mp3",
  loop: true,
});
drums.toDestination();

const melody = new Tone.Player({
  url: "loops/Melody0.mp3",
  loop: true,
});
melody.toDestination();

// const bass = new Tone.Player("loops/Bass0.mp3");
// bass.loop = true;
// bass.autostart = true;
// bass.toDestination();

function setup() {
  noCanvas();
}

function draw() {
  // not drawing anything for now
}

function keyTyped() {
  if (loaded) {
    if(Tone.Transport.state == "stopped"){
      Tone.Transport.bpm.value = 121.80;
      Tone.TimeSignature = [3, 4];
      Tone.Transport.start();
    }
    if(key == 'a'){
      if(bass.state == "stopped"){
        bass.start("@16n");    
      }
      else{
        bass.stop();    
      }      
    }
    if(key == 's'){
      if(chords.state == "stopped"){
        chords.start("@1m");    
      }
      else{
        chords.stop();    
      }    
    }
    if(key == 'd'){
      if(drums.state == "stopped"){
        drums.start("@1m");    
      }
      else{
        drums.stop();    
      }  
    }
    if(key == 'f'){
      if(melody.state == "stopped"){
        melody.start("@1m");    
      }
      else{
        melody.stop();    
      }  
    }
  }
}

Tone.loaded().then(function () {
  loaded = true;
});
