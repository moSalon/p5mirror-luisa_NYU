// Tone.Event is the base-class for musical events. It creates a callback with a value which will be passed in as the second argument to the callback.


let synth = new Tone.Synth().toDestination();
let event = new Tone.ToneEvent(callback, "C2");

// this callback plays a note
function callback(time, pitch) {
  synth.triggerAttackRelease(pitch, "8n", time, random(0.3, 0.7));
}

event.loop = true;
event.loopStart = 0;
event.loopEnd = "8n";

event.playbackRate = 1;
event.probability = 0.8;
event.mute = false;
event.humanize = false; 
// drift by +/- a 32nd-note
// event.humanize = "32n"

// start the event at the beginning of the Transport timeline
event.start(0);

// stop the event on the 4th measure
// event.stop("1m");
Tone.Transport.start();

function setup(){
  
}
