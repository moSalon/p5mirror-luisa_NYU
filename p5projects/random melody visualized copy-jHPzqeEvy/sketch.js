// Try the following: 
// Press a key to play a random frequency between minPitch and maxPitch

let minPitch = 300;
let maxPitch = 600; 

// Sound
let currentPitch;
let fMin = 100; 
let fMax = 1000;
// fMin * exp(2, octaves) = fMax; therefore:
let octaves = Math.log2(fMax/fMin);
let synth = new Tone.Synth();
synth.toDestination();

let h;

function setup() {
    createCanvas(100, 300);
    colorMode(HSB);
    h = height / octaves;
}

function draw(){
  background(255);
  
  // Draw background colors
  // for(let y = 0; y < height; y++){
  //   let c = map(y % h, h, 0, 0, 360);
  //   noFill();
  //   stroke(c, 30, 100);
  //   strokeWeight(1);
  //   line(0, y, width, y);
  // }

  // Draw currentPitch
  if(currentPitch){
    noStroke();

  // log scale
    let y = fToY(currentPitch);
    let c = map(y % h, h, 0, 0, 360);
    fill(c, 100, 100);
    rect(0, y, width, h/20);
  }
  
  // gray out of range frequencies
  noStroke();
  fill(0, 0.2);
  rect(0, 0, width, fToY(maxPitch));
  rect(0, fToY(minPitch), width, height);
  fill(0);
  
  // Draw minPitch, maxPitch
  // rect(0, fToY(minPitch), width, h/20);
  // rect(0, fToY(maxPitch), width, h/20);
  
  // Draw lines every 100Hz
  // let y = 0;
  for(let f = fMin; f < fMax; f+=100){
    y = height - Math.log2(f/fMin)/octaves * height;
    fill(0, 50);
    stroke(0, 0, 0, 0.4); 
    line(0, y, width, y);
    text(f + " Hz", 0, y-5);
    
  }

  // Draw octave labels
  for(let step = 0; step < octaves; step++){
    stroke(0);
    fill(0);
    let y = height - step*h;
    line(0, y, width, y);
  }
  
}

function keyPressed(){
  currentPitch = random(minPitch, maxPitch);
  synth.triggerAttack(currentPitch);
}


function keyReleased(){
  currentPitch = 0;
  synth.triggerRelease();
}

function fToY(f){
  return height - Math.log2(f/fMin)/octaves * height;
}
  
function yToF(y){
  let steps = map(y, height, 0, 0, octaves);
  return fMin*pow(2, steps);
}
