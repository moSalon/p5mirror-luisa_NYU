
// Play a kick/x/snare/x pattern

// Use these two lines to change your pattern. 
// 1 is ON; 0 is OFF
var snarePattern = [0, 1, 0, 1];
var kickPattern = [1, 1, 1, 1]; 

// SOUNDS

// Create a Players object and load the "kick.mp3" and "snare.mp3" files
const kit = new Tone.Players({
  "kick": "samples/505/kick.mp3", 
  "snare": "samples/snare.mp3"
});

// Connect the player output to the computer's audio output
kit.toDestination();

// Create a loop: call playBeat every quarter note
const repeatEvent = new Tone.Loop(playBeat, "4n");
repeatEvent.start(0);

// Audio playback loop
function playBeat(time) {
    let beat = Tone.Transport.position.split(":")[1];
    
    if(snarePattern[beat] == 1){
    	kit.player("snare").start(time);
    }
    if(kickPattern[beat] == 1){
    	kit.player("kick").start(time);
    }

}


// Once all audio files have been loaded, start the Tone playhead
Tone.loaded().then(function(){
 console.log("loaded");
  Tone.Transport.start();
}
)

