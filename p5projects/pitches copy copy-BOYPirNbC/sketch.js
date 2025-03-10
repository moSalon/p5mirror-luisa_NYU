// Click on the canvas to create a random melody
// Uncomment below to play each example

let synth = new Tone.Synth();
synth.toDestination();

let f = 217;
let scale = [];
scale[0] = 100;
let trt;

function setup(){
   trt = pow(2, 1/12);
  let n = 12;
  for(let i = 0; i < n; i++){
    scale[i+1] = scale[i]*trt;
  }
  console.log(scale);
}

function mousePressed(){
  // try: 
  // a large range: 50, 16000
  // a middle range: f, 2*f - like (400, 800)
  // a small range: f, f*1.01 - like (400, 404)
  // a range between f and 2*f 
  // a range 100, f and f*1.1
  let frequency = random(400, 405);
  
  
  // let pitchSet = [164.81, 185, 196, 220, 246.94];
  // let pos = floor(random(0, pitchSet.length));
  // let frequency = pitchSet[pos];
  
  // pentatonic scale
//   let pitchSet = [200, 225, 266.7, 300, 337.5, 400];
//   let pos = floor(random(0, pitchSet.length));
//   let frequency = pitchSet[pos];
  
  synth.triggerAttack(frequency);
  

}



function mouseReleased(){
  synth.triggerRelease();
}

function keyPressed(){
  let pos = parseInt(key) - 1;
  let frequency = scale[pos];
  synth.triggerAttack(frequency);
}
function keyReleased(){
  synth.triggerRelease();
}
