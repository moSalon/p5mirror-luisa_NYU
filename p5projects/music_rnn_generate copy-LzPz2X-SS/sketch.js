// music_rnn_generate
let TWINKLE_TWINKLE = {
  notes: [{
      pitch: 60,
      startTime: 0.0,
      endTime: 0.5
    },
    {
      pitch: 60,
      startTime: 0.5,
      endTime: 1.0
    },
    {
      pitch: 67,
      startTime: 1.0,
      endTime: 1.5
    },
    {
      pitch: 67,
      startTime: 1.5,
      endTime: 2.0
    },
    {
      pitch: 69,
      startTime: 2.0,
      endTime: 2.5
    },
    {
      pitch: 69,
      startTime: 2.5,
      endTime: 3.0
    },
    {
      pitch: 67,
      startTime: 3.0,
      endTime: 4.0
    },
    {
      pitch: 65,
      startTime: 4.0,
      endTime: 4.5
    },
    {
      pitch: 65,
      startTime: 4.5,
      endTime: 5.0
    },
    {
      pitch: 64,
      startTime: 5.0,
      endTime: 5.5
    },
    {
      pitch: 64,
      startTime: 5.5,
      endTime: 6.0
    },
    {
      pitch: 62,
      startTime: 6.0,
      endTime: 6.5
    },
    {
      pitch: 62,
      startTime: 6.5,
      endTime: 7.0
    },
    {
      pitch: 60,
      startTime: 7.0,
      endTime: 8.0
    },
  ],
  totalTime: 8
};

let synth = new Tone.Synth().toMaster();

// Initialize the model
let music_rnn = new mm.MusicRNN('https://storage.googleapis.com/magentadata/js/checkpoints/music_rnn/basic_rnn');
music_rnn.initialize();
let rnn_steps = 20;
let rnn_temperature = 1.5;

// The model expects a quantized sequence, and ours was unquantized:
// 4: steps per quarter note
const qns = mm.sequences.quantizeNoteSequence(TWINKLE_TWINKLE, 4);

// continueSequence returns a Promise
music_rnn
  .continueSequence(qns, rnn_steps, rnn_temperature)
  .then(play);

function play(sample){
  console.log(sample);
  
  // To convert from notes' start step to their position in seconds:
  // Assume 120bpm. 
  // 1 beat every 0.5 seconds -> multiply by 0.5s 
  // 4 steps per quantized quarter note -> multiply by 0.25
  let mult = 0.5 * 0.25;

  // Adapt note array to a Tone.Part format (objects must include a 'time' property)
  for(note of sample.notes){
    note.time = note.quantizedStartStep * mult;
  }

  let part = new Tone.Part(playNote, sample.notes)
  part.start(0);
  function playNote(time, value){    
    let duration = (value.quantizedEndStep - value.quantizedStartStep) * mult; 
    synth.triggerAttackRelease(Tone.Frequency(value.pitch, "midi"), duration);  
  }
  Tone.Transport.start();
}


