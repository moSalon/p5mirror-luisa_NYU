// The Code of Music
// Luisa Pereira
// http://thecodeofmusic.net/

let sound;
let fft;

function preload(){
  sound = loadSound('sounds/blip.wav');
}

function setup(){
  createCanvas(100,100);
  
  // Initialize the FFT object for analyzing sound
  fft = new p5.FFT();
  sound.amp(0.2);
}

function draw(){
  background(220);

  // Get the waveform data from the FFT analyzer
  let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(20);

  // Loop through the waveform data
  for (let i = 0; i < waveform.length; i++){
    // Map the index to the canvas width
    let x = map(i, 0, waveform.length, 0, width);
    // Map the waveform value to the canvas height
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
  
}

function mouseClicked(){
  sound.play();
}
