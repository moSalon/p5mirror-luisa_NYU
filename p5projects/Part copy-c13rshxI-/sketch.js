// Tone.Part aggregates any number of Tone.Events which can be started, stopped and looped as a combined unit. Parts have all of the same methods as Tone.Events.

// They can be constructed with either an array of [Time, Value] pairs, or with an array of objects that contain a "time" property.

let synth = new Tone.Synth().toDestination();
let part = new Tone.Part(callback, 
                         [
                          ["0", "C#3"], 
                          ["4n", "G3"], 
                          [3 * Tone.Time("8n"), "G#3"], 
                          ["2n", "C3"]
                        ]);

// this callback plays a note
function callback(time, pitch) {
	synth.triggerAttackRelease(pitch, "8n", time);
}

part.loop = true;
// part.playbackRate = 1;
// part.probability = 1;
// part.mute = false;
// part.humanize = false; 
// drift by +/- a 32nd-note
// part.humanize = "32n";

// start the event at the beginning of the Transport timeline
part.start(0);

// stop the event on the 4th measure
// event.stop("1m");
Tone.Transport.start();

function setup(){
  
}
