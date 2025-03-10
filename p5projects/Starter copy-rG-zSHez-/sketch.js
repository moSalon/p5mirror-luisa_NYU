const osc = new Tone.Oscillator(440);
osc.toDestination();
osc.start();

let fft = new Tone.FFT(512);
osc.connect(fft);


function setup(){
  background(255);
  createCanvas(200, 200);
  
}

function draw(){  
  drawFFT(0, 0, width, 0);
}

function drawFFT(x, y, w, h){
  let frequencyData = fft.getValue();
  push();
  translate(x, y);
  noStroke();
  fill(0);
  beginShape();
  vertex(0, h);
  for (let i = 0; i < frequencyData.length; i++) {
    let x = map(log(i), 0, log(frequencyData.length), 0, w);
    let y = map(frequencyData[i], -100, 0, h, 0);
    vertex(x, y);
  }
  vertex(w, h);
  endShape();
  pop();
}

setInterval(randomPartials, 1000);

function randomPartials(){
  // generate 8 random partials
  let partials = [];
  for(let i = 0; i < 8; i++){
    partials.push(random());
  }
  osc.partials = partials;
  // console.log(partials);
  
}

function mouseClicked(){
  randomPartials();
}
