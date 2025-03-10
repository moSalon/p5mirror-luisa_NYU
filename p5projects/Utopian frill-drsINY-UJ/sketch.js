// principio para convertir desde formato Tone a formato MusicRNN
// input en formato JSON tone.
for(note of input.notes){
  note.startTime = note.time;
  note.endTime = note.time + note.duration;
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}