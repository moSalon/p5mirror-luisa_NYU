let synth = new Tone.Synth().toDestination();

let arrayOfEvents = [
  {"time": 1, "pitch":"A3" }, 
  {"time": 1.5, "pitch":"B3" }, 
  {"time": 2, "pitch":"C4" }
];
let part = new Tone.Part(myCallbackFunction, arrayOfEvents).start(0);
part.start(0);
Tone.Transport.start();


function myCallbackFunction(time, value){
  synth.triggerAttackRelease(value.pitch, 0.5);
}