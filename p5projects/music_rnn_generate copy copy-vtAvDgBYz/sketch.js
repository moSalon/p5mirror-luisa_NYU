// music_rnn_generate
let input = {
  notes:  [
        {
          "duration": 0.15789475,
          "durationTicks": 60,
          "midi": 77,
          "name": "F5",
          "ticks": 0,
          "time": 0,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.15789475,
          "durationTicks": 60,
          "midi": 73,
          "name": "C#5",
          "ticks": 60,
          "time": 0.15789475,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.15789475000000003,
          "durationTicks": 60,
          "midi": 68,
          "name": "G#4",
          "ticks": 120,
          "time": 0.3157895,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.15789474999999997,
          "durationTicks": 60,
          "midi": 73,
          "name": "C#5",
          "ticks": 180,
          "time": 0.47368425000000003,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.15789474999999997,
          "durationTicks": 60,
          "midi": 77,
          "name": "F5",
          "ticks": 240,
          "time": 0.631579,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.15789475000000008,
          "durationTicks": 60,
          "midi": 73,
          "name": "C#5",
          "ticks": 300,
          "time": 0.78947375,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.15789474999999986,
          "durationTicks": 60,
          "midi": 78,
          "name": "F#5",
          "ticks": 360,
          "time": 0.9473685000000001,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.15789475000000008,
          "durationTicks": 60,
          "midi": 73,
          "name": "C#5",
          "ticks": 420,
          "time": 1.10526325,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.15789475000000008,
          "durationTicks": 60,
          "midi": 78,
          "name": "F#5",
          "ticks": 480,
          "time": 1.263158,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.15789474999999986,
          "durationTicks": 60,
          "midi": 73,
          "name": "C#5",
          "ticks": 540,
          "time": 1.42105275,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.15789475000000008,
          "durationTicks": 60,
          "midi": 78,
          "name": "F#5",
          "ticks": 600,
          "time": 1.5789475,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.15789475000000008,
          "durationTicks": 60,
          "midi": 73,
          "name": "C#5",
          "ticks": 660,
          "time": 1.73684225,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.15789475000000008,
          "durationTicks": 60,
          "midi": 80,
          "name": "G#5",
          "ticks": 720,
          "time": 1.8947370000000001,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.15789474999999964,
          "durationTicks": 60,
          "midi": 73,
          "name": "C#5",
          "ticks": 780,
          "time": 2.05263175,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.15789475000000008,
          "durationTicks": 60,
          "midi": 80,
          "name": "G#5",
          "ticks": 840,
          "time": 2.2105265,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.15789475000000008,
          "durationTicks": 60,
          "midi": 73,
          "name": "C#5",
          "ticks": 900,
          "time": 2.36842125,
          "velocity": 0.5039370078740157
        }],
  totalTime: 8
};

let synth = new Tone.Synth().toMaster();

// convert to magenta input format
let totalTime = 0;
for(note of input.notes){
  note.startTime = note.time;
  note.endTime = note.time + note.duration;
  note.pitch = note.midi;
  totalTime += note.endTime;
}
input.totalTime = totalTime;



// Initialize the model
let music_rnn = new mm.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/basic_rnn');
music_rnn.initialize();
let rnn_steps = 60;
let rnn_temperature = 0.6; // higher: more random (less like the sequence). 
// temperature values above 1.5 will result in essentially random sequences

// The model expects a quantized sequence, and ours was unquantized:
// 4: steps per quarter note
const qns = mm.sequences.quantizeNoteSequence(input, 4);
console.log("qns", qns);

// continueSequence returns a Promise
music_rnn
  .continueSequence(qns, rnn_steps, rnn_temperature)
  .then(play);

function play(sample){
  console.log(sample);
  
  // Assume 120bpm -> * 0.5s; 4 steps per quantized quarter note -> * 0.25
  let mult = 0.5 * 0.25;

  // Adapt note array to a Tone.Part format (objects must include a 'time' property)
  for(note of sample.notes){
    note.time = note.quantizedStartStep * mult;
  }
  
  let original = new Tone.Part(function(time, value){
  let duration = value.endTime - value.startTime;
  synth.triggerAttackRelease(Tone.Frequency(value.pitch, "midi"), duration);
}, TWINKLE_TWINKLE.notes).start(0);

Tone.Transport.start();

  let part = new Tone.Part(function(time, value){
    let duration = (value.quantizedEndStep - value.quantizedStartStep) * mult; 
    synth.triggerAttackRelease(Tone.Frequency(value.pitch, "midi"), duration);
  }, sample.notes).start(0);
  
  Tone.Transport.start();
}


