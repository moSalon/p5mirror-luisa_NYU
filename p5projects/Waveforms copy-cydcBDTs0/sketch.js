let osc = new Tone.Oscillator(400, "square");
osc.toDestination();
osc.volume.value = -70;
let waveform = new Tone.Waveform(256);
osc.toDestination();
osc.connect(waveform);

let aFilter = new Tone.Filter(150, "lowpass");


function setup(){
  createCanvas(200, 200);
}

function draw(){  
  background(0);
  drawWaveform(0, 0, width, height);
}

function drawWaveform(x, y, w, h){
  push();
  translate(x, y);
  let wave = waveform.getValue();
  noFill();
  stroke(255);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < wave.length; i++) {
    let x = map(i, 0, wave.length, 0, w);
    let y = map(wave[i], -1, 1, h-30, 30);
    vertex(x, y);
  }
  endShape();
  pop();
}

function mousePressed(){
  if(osc.state == "stopped"){
    osc.start();
  }
  osc.volume.rampTo(-6);
  
}

function mouseReleased(){
  osc.volume.rampTo(-70);
}