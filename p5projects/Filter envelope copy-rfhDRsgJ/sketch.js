let osc = new Tone.Oscillator(100, "triangle");
osc.volume.value = -30;
osc.start();

let aFilter = new Tone.Filter(2000, "lowpass");
let freqEnv = new Tone.FrequencyEnvelope({
  "attack": 0.2,
  "decay": 0,
  "sustain": 1, // a percentage (0-1) of the full amplitude
  "release": 0.1,
  "baseFrequency": 400,
  "octaves": 2
});

let ampEnv = new Tone.AmplitudeEnvelope({
  "attack": 0,
  "decay": 0.3,
  "sustain": 1,
  "release": 1
});

// freqEnv.connect(osc.frequency);
freqEnv.connect(aFilter.frequency);

osc.connect(aFilter);
aFilter.connect(ampEnv);
ampEnv.toDestination();


function setup() {}

function keyPressed() {
  Tone.start();
  ampEnv.triggerAttack();
  freqEnv.triggerAttack();
}

function keyReleased() {
  ampEnv.triggerRelease();
  freqEnv.triggerRelease();
}