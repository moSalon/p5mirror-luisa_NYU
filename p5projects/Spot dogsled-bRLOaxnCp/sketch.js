// PSEUDO CODE FOR RECORDING USER PLAYED NOTES, THEN PLAYING THEM BACK
let currentNote;
let notes;

let whichNoteShouldBeHighlighted;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //look at whichNoteShouldBeHighlighted, and paint that rectangle red
}

function keyPressed(){
  currentNote = {time:Tone.now(), pitch:"F3", duration:0, velocity:-5, release:20}
}

function keyReleased(){
  let duration = Tone.now() - currentNote.startTime;
  currentNote.duration(duration);
  
  notes.push(currentNote);
  currentNote = null;
}

// notes = [
//     {time:0, pitch:"F3", duration:1, velocity:-5, release:20}, 
//     {time:0.5, pitch:"G3", duration:0.25, velocity:0, release:1}, 
//     ...
//   ]
function play(){
  let part = new Tone.Part(myCallBackFunction, 
                         notes);  
  
}
// {time:0, pitch:"F3", duration:1, velocity:-5, release:20}
function myCallBackFunction(note){
  synth.envelope.release = 20;
//   synth.triggerAttackRelease(note.pitch, note.time, note.velocity, note.duration);
  synth.triggerAttack(note.pitch, note.time, note.velocity);
  synth.triggerRelease(note.pitch, time + note.duration);
  
  whichNoteShouldBeHighlighted = note.pitch;
  
}