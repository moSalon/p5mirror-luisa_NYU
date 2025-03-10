// Add a snare drum sound
// Play a kick/snare/snare/snare pattern

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
// Create a loop that calls playDrum every second
const repeatEvent = new Tone.Loop(playBeat, "4n");
repeatEvent.start(0);

// Audio playback loop
function playBeat(time) {
    kit.player("kick").start(time);
}


// Once all audio files have been loaded, start the Tone playhead
Tone.loaded().then(function(){
 console.log("loaded");
  Tone.Transport.start();
}
)

