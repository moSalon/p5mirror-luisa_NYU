// Create a Player object and load the "kick.mp3" file
const drum = new Tone.Player("samples/505/kick.mp3");

// Connect the player output to the computer's audio output
drum.toDestination();

// Set the time signature to 4/4.
let beatsPerMeasure = 3;
Tone.Transport.timeSignature = [beatsPerMeasure, 4];

// Set the tempo to 120 beats per minute
Tone.Transport.bpm.value = 120;

// Create a loop: call playBeat every quarter note
// Create a loop that calls playDrum every second
const repeatEvent = new Tone.Loop(playDrum, "4n");
repeatEvent.start();

function playDrum(time) {
  // Tone's position gives us a string:
  // bar:beat:sixteenth
  // Slice the string by ":" and get the number in the second position (the beat)
  let beat = Tone.Transport.position.split(":")[1];
  console.log(beat);
  
  drum.start(time);  
  // Set the volume so that the first beat is played at a higher volume than the rest
  if (beat == beatsPerMeasure - 1) {
    drum.volume.rampTo(0);
  } else {
    drum.volume.rampTo(-20);
  }
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
