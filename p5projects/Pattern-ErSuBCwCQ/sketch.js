// Tone.Pattern facilitates the creation of various arpeggiated note patterns. Its constructor takes a callback, an array of note values, and a string (the name of a supported classic "arpeggiator" pattern: "up", "down", "upDown", etc.)…

let synth = new Tone.Synth().toDestination();
//cycle up and then down the array of values
let arp = new Tone.Pattern(callback, ["C3", "E3", "G3"], "down");
//callback order: "C3", "E3", "G3", "E3", ...repeat

arp.pattern = "upDown";
//callback order: "G3", "E3", "C3", "E3", ...repeat


// this callback plays a note
function callback(time, pitch) {
	synth.triggerAttackRelease(pitch, "8n", time);
}

arp.loop = true;
// arp.playbackRate = 1;
// arp.probability = 1;
// arp.mute = false;
// arp.humanize = false; 
// drift by +/- a 32nd-note
// arp.humanize = "32n";

// start the event at the beginning of the Transport timeline
arp.start(0);

// stop the event on the 4th measure
// event.stop("1m");
Tone.Transport.start();

function setup(){
  
}
