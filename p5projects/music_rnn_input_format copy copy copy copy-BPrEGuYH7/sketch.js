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

  ],
  totalTime: 8
};

// to convert from magenta to Tone-friendly format
for(note of continuation){
  note.time = note.startTime;
  note.duration = note.endTime - note.startTime;
}
