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

// Set the tempo to 120 beats per minute
Tone.Transport.bpm.value = 120;

// Set the time signature to 4/4. 
Tone.Transport.timeSignature = [4, 4];

// Create a loop: call playBeat every quarter note
Tone.Transport.scheduleRepeat(playBeat, "4n");

let snarePattern = [0, 1, 0, 1];
let kickPattern = [1, 1, 1, 1];

let cells = [
  [0, 1, 0, 1], 
  [1, 1, 1, 0]
]

// Audio playback loop
function playBeat(time) {
    let beat = Tone.Transport.position.split(":")[1];
  
    if(cells[0][beat] == 1 && random() < 0.4){
        kit.player("snare").start(time);
    }
    if(cells[1][beat] == 1){
        kit.player("kick").start(time);
    }
  
    // if(beat == 0 || beat == 2){
    //   kit.player("kick").start(time);
    // }
    // else if(beat == 1 || beat == 3){
    //   kit.player("snare").start(time);
    // }
    
    
}


// Once all audio files have been loaded, start the Tone playhead
Tone.loaded().then(function(){
 console.log("loaded");
  Tone.Transport.start();
}
)

