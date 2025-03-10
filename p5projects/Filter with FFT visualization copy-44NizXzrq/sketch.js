// Press any key to play 

//oscillator >> ADSR >> filter >> output

let osc;
let ampEnv;
let aFilter;

//Try a lowpass filter and lower frequencies for a bass sound
aFilter = new Tone.Filter(150, "highpass");
aFilter.toDestination();

//Plucked String
ampEnv = new Tone.AmplitudeEnvelope({
  "attack": 0,
  "decay": 0.3,
  "sustain": 1,
  "release": 1
});
ampEnv.releaseCurve = "linear";
ampEnv.connect(aFilter);

osc = new Tone.Oscillator(100, "square");
// osc = new Tone.Oscillator(100, "sawtooth");
// osc = new Tone.Oscillator(100, "triangle");
osc.connect(ampEnv);
osc.start();
let analyzer = new Tone.FFT(512);
aFilter.connect(analyzer);

let slider;


function setup(){
  createCanvas(200,200);
  slider = createSlider(20, 1600, 0);
  slider.style("width:200px");
  slider.input(updateCutoff);
}

function draw(){
  background(255);
  let frequencyData = analyzer.getValue();

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
  fill("red");
}

function updateCutoff(){ 
  aFilter.frequency.rampTo(slider.value());
}

function keyPressed() {
  if(Tone.context.state != "running"){
    
    Tone.start();
  }
  
  ampEnv.triggerAttack();
}

function keyReleased() {
  ampEnv.triggerRelease();
}
