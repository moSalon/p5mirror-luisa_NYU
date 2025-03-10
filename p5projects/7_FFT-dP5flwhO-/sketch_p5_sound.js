// The Code of Music
// Luisa Pereira
// http://thecodeofmusic.net/

let sound;

function preload(){
  sound = loadSound('sounds/blip.wav');
}

function setup(){
  createCanvas(200,200);
  
  // Initialize the FFT object for analyzing sound
  fft = new p5.FFT();
  sound.amp(0.2);
}

function draw(){
  background(0);

  let spectrum = fft.analyze();
  noStroke();
  for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h );
  }
  
}

function mouseClicked(){
  sound.play();
}
