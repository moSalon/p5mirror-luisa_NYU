var synth = new Tone.Synth().toMaster();

var pianoPart = new Tone.Part(function(time, chord) {
    synth.triggerAttackRelease(chord, "8n", time);
  }, [
    ["0:0", "E3"],
    ["0:2", "F3"],
    ["0:4", "G3"],
    ["0:6", "C4"]
  ]).start();
  pianoPart.loop = true;
  pianoPart.loopEnd = "2m";

function setup() {
  pianoPart.start();
  Tone.Transport.start();
}

function draw() {

}
