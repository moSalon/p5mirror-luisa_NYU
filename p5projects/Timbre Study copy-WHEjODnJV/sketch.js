//sampling the sounds
let PianoSampler = new Tone.Sampler({
    "A4": "sounds/PianoA4.wav"
});

const vibrato = new Tone.Vibrato({frequency: 60, depth:1});
PianoSampler.connect(vibrato);
// vibrato.wet.rampTo(1);
// vibrato.toDestination();

let FluteSampler = new Tone.Sampler({
    "C4": "sounds/FluteC4.wav"
}).toDestination();

let GuitarSampler = new Tone.Sampler({
    "A4": "sounds/GuitarA4.wav"
}).toDestination();

let ViolinSampler = new Tone.Sampler({
    "A4": "sounds/ViolinA4.wav"
}).toDestination();

let TrumpetSampler = new Tone.Sampler({
    "B4": "sounds/trumpetB4.wav"
}).toDestination();



//envelope values for each sampler
PianoSampler.envelope = { attack: 0.2, decay: 0.2, sustain: 0.8, release: 1.0 };
FluteSampler.envelope = { attack: 0.2, decay: 0.3, sustain: 0.7, release: 0.9 };
GuitarSampler.envelope = { attack: 0.4, decay: 0.1, sustain: 0.5, release: 1.2 };
ViolinSampler.envelope = { attack: 0.5, decay: 0.2, sustain: 0.6, release: 1.1 };
TrumpetSampler.envelope = { attack: 0.3, decay: 0.2, sustain: 0.9, release: 0.8 };

let samplerArray = [PianoSampler, FluteSampler, GuitarSampler, ViolinSampler, TrumpetSampler];

// Waveform analyzer
let analyzer = new Tone.Waveform(256);

// Connect samplers to master gain for waveform visualization
let masterGain = new Tone.Gain().toDestination();
samplerArray.forEach(sampler => sampler.connect(masterGain));
masterGain.connect(analyzer);

let loaded = false;
let sqArray = []; // 2D array that stores square objects for the grid

function setup(){
  createCanvas(500,600);
  sqArray = [ 
    [new Square("A4", 1,1), new Square("A4", 1,2), new Square("A4", 1,3), new Square("A4", 1,4), new Square("A4", 1,5) ], 
    [new Square("B4", 2,1), new Square("B4", 2,2), new Square("B4", 2,3), new Square("B4", 2,4), new Square("B4", 2,5) ], 
    [new Square("C4", 3,1), new Square("C4", 3,2), new Square("C4", 3,3), new Square("C4", 3,4), new Square("C4", 3,5) ], 
    [new Square("D4", 4,1), new Square("D4", 4,2), new Square("D4", 4,3), new Square("D4", 4,4), new Square("D4", 4,5) ] 
  ];
}

function draw(){
  console.log(PianoSampler.envelope.attack);
  PianoSampler.attack = 0.01;
  PianoSampler.release = 1; 
  
  background(217);
  fill(0);
  noStroke();
  //black rectangular screen
  rect(55,455,390,120); 
  textSize(25);
  text("How do different Timbres sound like?", width/2-205, 35);
       
  // Columns
  fill(12, 192, 223);
  rect(50,110,80,320);
  fill(90);
  textSize(16);
  text("Piano", 67, 89);

  fill(255, 189, 89);
  rect(130,110,80,320);
  fill(90);
  textSize(16);
  text("Flute", 151, 89);

  fill(255, 222, 89);
  rect(210,110,80,320);
  fill(90);
  textSize(16);
  text("Guitar", 228, 89);

  fill(82, 113, 255);
  rect(290,110,80,320);
  fill(90);
  textSize(16);
  text("Violin", 310, 89);

  fill(255, 87, 87);
  rect(370,110,80,320);
  fill(90);
  textSize(16);
  text("Trumpet", 381, 89);
  stroke(255);  
    
  // Grid lines
  line(0,50,width, 50);  
  line(50,50,50,height);
  line(450,50,450,height); 
  //vertical lines
  line(130,50,130,430);  
  line(210,50,210,430);  
  line(290,50,290,430);
  line(370,50,370,430); 
  //horizontal lines
  line(50,110,450,110); 
  line(50,190,450,190); 
  line(50,270,450,270);
  line(50,350,450,350);
  line(50,430,450,430);

    
  let waveform = analyzer.getValue();
  
  // Waveform visualization
  strokeWeight(2);
  noFill();
  stroke(0, 191, 99);
  beginShape();
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 57, width-55);
    let y = map(waveform[i], -1, 1, height, 440);
    vertex(x, y);
  }
  endShape();
}

class Square {
  constructor(pitch, row, column) {
    this.pitch = pitch;
    this.column = column;
    this.row = row;
  }
}

function mouseClicked() {
  if(loaded) {
    // If the grid is pressed
    if(mouseX > 50 && mouseX < width - 50 && mouseY > 110 && mouseY < 430) {
      let row = ceil((mouseY - 110) / 80);
      let col = ceil((mouseX - 50) / 80);
      let pitch = sqArray[row - 1][col - 1].pitch;
      samplerArray[col - 1].triggerAttack(pitch);
    }
  
  }
}



Tone.loaded().then(function() {
  loaded = true;
});
