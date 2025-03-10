// Add a snare drum sound
// Play a kick/snare/snare/snare pattern

// SOUNDS

// Create a Players object and load the "kick.mp3" and "snare.mp3" files
const kit = new Tone.Players({
  "kick": "samples/505/kick.mp3", 
  "snare": "samples/snare.mp3"
});

// Connect the player output to the computer's audio output
kit.toDestination();

Tone.Transport.bpm = 160;

// Create a loop: call playBeat every quarter note
const repeatEvent = new Tone.Loop(playBeat, "4n");

// Audio playback loop
function playBeat(time) {
    let beat = Tone.Transport.position.split(":")[1];
    
    // always play the kick on beat 0
    if(beat == 0){
      kit.player("kick").start(time);
    }
    // play the kick on beat 2 half of the time
    else if(beat == 2 && Math.random() < 0.4){
      kit.player("kick").start(time);
    }
    // always play the snare on beat 1
    else if(beat == 1 ){
      kit.player("snare").start(time);
    }
    // play the hh on beat 3 half of the time
    else if(beat == 3 && Math.random() < 0.2){
    	kit.player("snare").start(time);
    }
}

// Once all audio files have been loaded, start the Tone playhead
Tone.loaded().then(function(){
 console.log("loaded");
  Tone.Transport.start();
}
)

