let part1;
let part2;

// Assume 120bpm -> * 0.5s; 4 steps per quantized quarter note -> * 0.25
let mult = 0.5 * 0.25;

// MIDI notes for Drums
// 36: Bass Drum 1
// 38: Acoustic Snare
// 42: Closed Hi-Hat
// 45: Low Tom
// 46: Open Hi-Hat
// 48: Hi-Mid Tom
// 50: High Tom
let kit = new Tone.Players({
  36: "samples/505/kick.mp3",
  38: "samples/505/snare.mp3",
  42: "samples/505/hh.mp3",
  46: "samples/505/hho.mp3",
  50: "samples/707/Tom-707-Hi.mp3",
  48: "samples/707/Tom-707-Mid.mp3",
  49: "samples/707/Crash-707.mp3", // Crash cymbal
  45: "samples/707/Tom-707-Low.mp3",
  51: "samples/707/Ride-707.mp3",
});
kit.toDestination();
//end drumms

let synth = new Tone.Synth().toDestination();
//end melodies

function setup() {
  createCanvas(400, 400);

  input = createInput();
  input.position(115, 175);

  button = createButton("send");
  button.position(input.x + input.width, 175);
  button.mousePressed(generate);

  text = createElement("h2", "pick a number 1-10");
  text.position(115, 120);

  textAlign(CENTER);
  textSize(50);
}

//initialize both RNNs
let music_rnn1 = new mm.MusicRNN(
  "https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/drum_kit_rnn"
);
music_rnn1.initialize();

let music_rnn2 = new mm.MusicRNN(
  "https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/basic_rnn"
);
music_rnn2.initialize();

function generate() {
  //the line below is to stop the transport, in case it is running
  // Tone.Transport.stop();

  let sel = input.value();
  console.log(sel);
  console.log("sel", sel);
  
  console.log("before", Tone.Transport);
  Tone.Transport.cancel(0);
  // if(part1) part1.removeAll();
  // if(part2) part2.removeAll();
  console.log("after", Tone.Transport);
  
  
  if (sel <= 1) {
    Tone.Transport.stop();
    generateDrums();
  } else {
    generateMelody();
  }
}

function generateDrums() {
  let rnn_steps1 = floor(random(1, 10));
  let rnn_temperature1 = random(0.1, 30);

  // continueSequence returns a Promise
  music_rnn1
    .continueSequence(DRUMS, rnn_steps1, rnn_temperature1)
    .then(playDrumsPart);
}

function playDrumsPart(a) {
  Tone.Transport.start();
  // Adapt note array to a format Tone.Part understand (objects must include a 'time' property)
  for (note of a.notes) {
    // Assume 120bpm -> * 0.5
    note.time = note.quantizedStartStep * 0.5 * 0.25;
  }
  let part1 = new Tone.Part(playDrum, a.notes).start(0);
}

function playDrum(time, value) {
  let s = kit.player(value.pitch).start();
}

function generateMelody(){
  Tone.Transport.stop();
  let rnn_steps2 = 10;
  let rnn_temperature2 = 1.5;
  console.log("rnn_temp2", rnn_temperature2);
  console.log("rnn_steps2", rnn_steps2);
  // The model expects a quantized sequence, and ours was unquantized:
  // 4: steps per quarter note
  const qns = mm.sequences.quantizeNoteSequence(TWINKLE_TWINKLE, 4);

  // continueSequence returns a Promise
  music_rnn2.continueSequence(qns, rnn_steps2, rnn_temperature2).then(playMelody);
}

function playMelody(sample) {
  // console.log(sample);
  // Adapt note array to a Tone.Part format (objects must include a 'time' property)
  for (note of sample.notes) {
    note.time = note.quantizedStartStep * mult;
  }

  part2 = new Tone.Part(playNote, sample.notes);
  part2.start();

  Tone.Transport.start();
}

function playNote(time, value){
  let duration =
    (value.quantizedEndStep - value.quantizedStartStep) * mult;
  synth.triggerAttackRelease(
    Tone.Frequency(value.pitch, "midi"),
    duration
  );
}

function draw() {
  background(50);
}
