// The Code of Music
// Luisa Pereira
// http://thecodeofmusic.net/

const kit = new Tone.Players({
  "kick": "samples/505/kick.mp3", 
  "snare": "samples/505/snare.mp3"
});
kit.toDestination();

// Create a loop that calls playDrum every quarter note 
const repeatEvent1 = new Tone.Loop(playRhythm1, 1/3);
const repeatEvent2 = new Tone.Loop(playRhythm2, 1/2);
repeatEvent1.start("4n");
repeatEvent2.start("4n");

function playRhythm1(time){      
  // Accent the first beat
  if(Tone.Transport.position.split(":")[1] == "0") {
    kit.player("kick").volume.rampTo(0);    
  }
  else {
    kit.player("kick").volume.rampTo(-5);
  }
  kit.player("kick").start(time);
}

function playRhythm2(time){ 
  // Accent the first beat
  if(Tone.Transport.position.split(":")[1] == "0") {
    kit.player("snare").volume.rampTo(0);    
  }
  else {
    kit.player("snare").volume.rampTo(-5);
  }
  kit.player("snare").start(time);
}

// Interface: p5 functions
function setup() {
  btn = createButton("play");
  btn.mousePressed(togglePlay);
  btn.position(0, 0);
}

function togglePlay() {
  if (Tone.Transport.state == "started") {
    Tone.Transport.pause();
    btn.html("play");
  } else {
    Tone.Transport.start();
    btn.html("pause");
  }
}
