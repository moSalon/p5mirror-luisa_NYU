const sound = new Tone.UserMedia();
let analyzer = new Tone.FFT(512);
sound.connect(analyzer);
sound.open();

let loaded = false;

function setup(){
  createCanvas(100,100);
}

function draw(){
  
  background(255);
  let frequencyData = analyzer.getValue();
  console.log(frequencyData);

  noStroke();
  fill(0);
  beginShape();
  vertex(0, height);
  for (let i = 0; i < frequencyData.length; i++) {
    let x = map(log(i), 0, log(frequencyData.length), 0, width);
    let y = map(frequencyData[i], -127, 0, height, 0);
    vertex(x, y);
  }
  vertex(width, height);
  endShape();
  
}

