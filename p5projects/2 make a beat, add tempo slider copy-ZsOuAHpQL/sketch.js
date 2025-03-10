// Play a kick/snare/snare/snare pattern
let kickPattern = [1,0,1,0];
let snarePattern = [0, 1, 0, 1];

// INTERFACE
let playButton;
let tempoSlider;

// PATTERN
const totalBeats = 0;

// SOUNDS

// Create a Players object and load the "kick.mp3" and "snare.mp3" files
const kit = new Tone.Players({
  "kick": "samples/505/kick.mp3", 
  "snare": "samples/snare.mp3"
});

// Connect the player output to the computer's audio output
kit.toDestination();

// Create a loop: call playBeat every half a second
// Tone.Transport.scheduleRepeat(playBeat, 0.5);

// Create a loop: call playBeat every beat / quarter note
Tone.Transport.bpm.value = 120;
Tone.Transport.scheduleRepeat(playBeat, "4n");

// Audio playback loop
function playBeat(time) {
  if(playButton && kit.loaded){
    let beat = Tone.Transport.position.split(":")[1];
    
    if(kickPattern[beat] == 1){
      kit.player("kick").start(time);
    }
    
    if(snarePattern[beat] == 1){
      // kit.player("snare").start(time);
    }
    
    // if(beat == 0)
    // {
    //   kit.player("kick").start(time);
    // }
    // else{
    //   kit.player("snare").start(time);
    // }
  }
    
}

// INTERFACE
function setup(){
  playButton = createButton('play');
  playButton.mouseClicked(togglePlay);
  
  tempoSlider = createSlider(20, 240, 120);
  tempoSlider.changed(updateTempo);
  
}

function togglePlay(){
  if(Tone.Transport.state == "started"){
  	Tone.Transport.stop();
    playButton.html('play');
  }
  else{
    if(kit.loaded){
    	Tone.Transport.start();
    	playButton.html('stop');
    }
  }	
}

function mousePressed(){
  let pos = floor(random(0, kickPattern.length));
  kickPattern[pos] = 1;
  console.log(kickPattern);
}

function updateTempo(){
  Tone.Transport.bpm.rampTo(tempoSlider.value());
}