let cells = [];
let currentStep = 0;

let trackNames = ["C", "D", "E", "F", "G", "A", "B"];
let octave = 1;

const loop = new Tone.Loop(onStep, "16n");
loop.start(0);
let playButton;
const instrument = new Tone.Sampler({
  "A1": "samples/casio/A1.mp3",
  "C2": "samples/casio/C2.mp3",
  "E2": "samples/casio/E2.mp3",
  "G2": "samples/casio/G2.mp3",
});
instrument.toDestination();
Tone.getTransport().bpm.value = 120;


// Drawing
let w;
let h;
let colors = [];


function onStep(time) {  
  for(let track = 0; track < 7; track++){
    if(cells[track][currentStep] == 1){
      // TO DO: come back to this line
      let note = trackNames[trackNames.length - 1 - track] + octave;
      instrument.triggerAttackRelease(note, "32n", time);
    }
  }
  console.log("step", currentStep);
  currentStep = (currentStep + 1) % 16;
  
  
}

function draw() {
  background(255);
  for (let step = 0; step < 16; step++) {
    for (let track = 0; track < 7; track++) {
      if (cells[track][step] == 1) {
        noStroke();
        fill(colors[track], 100, 100);
        rect(step * w, track * h, w, h);
      }
    }
  }
}

function setup() {
  // Initialize sequencer cells. 1 = ON. 0 = OFF
  for (let track = 0; track < 7; track++) {
    cells[track] = [];
    for (let step = 0; step < 16; step++) {
      if (track == step) {
        cells[track][step] = 1;
      } else {
        cells[track][step] = 0;
      }
    }
  }

  // Drawing
  createCanvas(800, 200);

  // Interactivity
  playButton = createButton("play");
  playButton.mousePressed(togglePlay);

  colorMode(HSB);
  w = width / 16;
  h = height / 7;

  // Initialize color for each track
  for (let i = 0; i < 7; i++) {
    colors[i] = (360 / 7) * i;
  }
}

function mousePressed() {
  // If the mouse is over the canvas
  if (0 < mouseX && mouseX < width && 0 < mouseY && mouseY < height) {
    // Determine which cell the mouse is on
    let step = floor(mouseX / w);
    let track = floor(mouseY / h);

    // Toggle that cell on/off
    cells[track][step] = !cells[track][step];
  }
}

function togglePlay() {
  // if the timeline has started, stop it
  if (Tone.getTransport().state == "started") {
    Tone.getTransport().stop();
    playButton.html("play");
  }
  // otherwise (it's stopped), start it
  else {
    // if (instrument.loaded) {
      // Resume the audio context
      Tone.start().then(() => {
        Tone.getTransport().start();
        playButton.html("stop");
      });
    // }
  }
}
