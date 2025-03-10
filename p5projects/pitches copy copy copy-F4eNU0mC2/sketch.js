let synth = new Tone.Synth();
synth.toDestination();
// synth.portamento = 0.1;

let f = 400;
// let scale = [400, 450, 533.4, 600, 675, 800];
let scale = [];

// number of perceptually equal steps in the scale
let n = 40;

// 2. Derive equal-tempered chromatic scale
scale[0] = f;
let nthRootOfTwo = Math.pow(2, 1/n);
for (let i = 0; i < n; i++) {
  scale[i + 1] = scale[i] * nthRootOfTwo;
}

console.log(scale);
function setup(){
   
}

function keyPressed(){ 
  let pos = int(key);
  synth.triggerAttack(scale[pos]);
}


function mouseReleased(){
  synth.triggerRelease();
}
