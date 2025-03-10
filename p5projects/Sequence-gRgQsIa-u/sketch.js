// Tone.Sequence extends Tone.Part and simplifies the notation of composing sequential events. Pass in an array of evenly-spaced events at a given subdivision like so:

let synth = new Tone.Synth().toDestination();
//a series of 8th notes
let seq = new Tone.Sequence(callback, ["C3", "Eb3", "F4", "Bb4"], "8n");

// Nested arrays will subdivide the 8th notes by the length of the subarray
// null is a rest.
// try: a dotted quarter-note (C3) followed by an 8th note triplet
// let seq = new Tone.Sequence(callback, ["C3", [null, "Eb3"], ["F4", "Bb4", "C5"]], "4n");

// this callback plays a note
function callback(time, pitch) {
	synth.triggerAttackRelease(pitch, "8n", time);
}

seq.loop = true;
// seq.playbackRate = 1;
// seq.probability = 1;
// seq.mute = false;
// seq.humanize = false; 
// drift by +/- a 32nd-note
// seq.humanize = "32n";

// start the event at the beginning of the Transport timeline
seq.start(0);

// stop the event on the 4th measure
// event.stop("1m");
Tone.Transport.start();

function setup(){
  
}
