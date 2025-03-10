

let synth = new Tone.Synth();
synth.toDestination();
let startNote = 60;
// let major = [0, 2, 2, 1, 2, 2, 2, 1];
let major = [0, 2, 4, 5, 7, 9, 11, 12];
// let minor = [2, 1, 2, 2, 1, 2, 2];
let minor = [0, 2, 3, 5, 7, 8, 10, 12]

let scale = [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72];

let computedScale = [60];
let pattern = minor;
for(let i = 1; i<=8; i++){
  computedScale[i] = startNote + pattern[i];
}
console.log(computedScale);

function setup() {
  createCanvas(620, 200);
}


function keyPressed(){
  let pos = parseInt(key) % 9 - 1;
  let noteObject = Tone.Frequency(computedScale[pos], "midi");
  synth.triggerAttack(noteObject);
  
    
}

function keyReleased(){
  synth.triggerRelease();
}