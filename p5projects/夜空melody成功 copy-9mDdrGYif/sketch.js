// Sequencer
let starPositions = [];
let moonX = 138;
let moonY = 100;
let dragging = false;
let offsetY = 0;
let initialMoonY = 100;

let bpm = 60;
let timeSignature = [4,4];
let nMeasures = 4;
function nSteps(){
  return nMeasures*timeSignature[0];
}

let numberOfOctaves = 8;
let nTracks = 7 * numberOfOctaves;
let baseOctave = 0;

let currentStep;
let cells = [];
let playButton;

// Sound
let player;
var noteNames = ["C", "D", "E", "F", "G", "A", "B","C"];

player = new Tone.Sampler(
    {
      "G2":"samples/guzheng.mp3"
      // "A1" : "samples/casio/A1.mp3",
      // "C2" : "samples/casio/C2.mp3",
      // "E2" : "samples/casio/E2.mp3",
      // "G2" : "samples/casio/G2.mp3"
    }
);
player.toDestination();
Tone.Transport.scheduleRepeat(onBeat, "4n");

function preload(){

  bg = loadImage('bg.jpg')
  star = loadImage('star.png')
  moon = loadImage('moon.png')
  fly = loadImage('leftfly.png')
  
}

function onBeat(time){
  let pos = Tone.Transport.position.split(":");
  let measure = int(pos[0]);
  let beat = int(pos[1]);
  currentStep = (measure*timeSignature[0] + beat) % nSteps();
  let velocity = 0.5;

  // If the current beat is on, play it
  for(let track = 0; track < nTracks; track++){
    if(cells[track][currentStep]){
      // The bottom track should have the lowest note
      let notePos = (nTracks - 1) - track; 
      let octave = baseOctave + floor(notePos / 7);
      // console.log(notePos, octave);
      let noteName = noteNames[notePos % 7];      
      let pitch = noteName + octave;
      player.triggerAttack(pitch, time);     
    }
  }
}

// Graphics
let w, h;
// let gray;
// let colors = [0];



function setup() {
    createCanvas(880, 880);
    w = width / nSteps();
    h = height / nTracks;
    colorMode(HSB);
    // gray =  color(0, 0, 0);
  
    // Load color array
    // for(let i = 1; i < nSteps(); i++){
    //   colors[i] = colors[i-1] + 36/(nSteps()-1);
    // }
    
  
  // Initialize all sequencer cells.ON: 1. OFF: 0.
  for(let track = 0; track < nTracks; track++){
    cells[track] = [];
    for(let step = 0; step < nSteps(); step++){
        cells[track][step] = 0;
    }
  }
  
  playButton = createButton('play');
  playButton.position(540, 250);
  playButton.mouseClicked(togglePlay);
  
  star.resize(int(star.width * 0.1), int(star.height * 0.1));
  moon.resize(int(moon.width * 0.1), int(moon.height * 0.1));
  fly.resize(int(fly.width * 0.1), int(fly.height * 0.1));

  Tone.Transport.bpm.value = bpm;
}

function draw(){
  background(bg);
    // image(star,50,50)
    image(moon,moonX, moonY)
  image(fly, 30,30)
  noStroke();
    for (const pos of starPositions) {
    if (pos.isVisible) {
      image(star, pos.x-50, pos.y-30);
    }
  }

  // Draw cells that are on
  for(let step = 0; step < nSteps(); step++){
    for(let track = 0; track < nTracks; track++){
      if(cells[track][step] == 1){
        let notePos = nTracks - 1 - track; 
        // let col = colors[notePos % 7];
        noFill();
        // fill(col, 0, 90);
        rect(step*w, track*h, w, h);
      }
    }
  }
  
  // Draw horizontal lines
   noStroke();
  //stroke(234, 30, 83, 60);
  for(let i = 0; i <= nTracks; i++){
    let y = i*h;
    line(0, y, width, y);
  }

  // Draw vertical lines
  for(let i = 0; i <= nSteps(); i++){
    // Thicker line for first beat (which marks the start of the measure)
    if(i % timeSignature[0] == 0){
      // strokeWeight(1);
      noStroke()
      //stroke(234, 30, 83, 60);
    }
    else{
      noStroke()
      //stroke(gray);
      strokeWeight(0.5);
    }
    
    line(i*w, 0, i*w, height);

    // Highlight the step that is playing
    if(i == currentStep && Tone.Transport.state == "started"){
      fill(0, 0, 50, 0.2);
      rect(i*w, 0, w, height)
    }
  }
}

function mousePressed(){
  //////star stuff/////////
    let clicked = false;
    for (const pos of starPositions) {
    if (dist(mouseX, mouseY, pos.x, pos.y) < star.width / 2) {
      pos.isVisible = !pos.isVisible; // Toggle visibility
      clicked = true;
    }
  }
    if (!clicked) {
    starPositions.push({ x: mouseX, y: mouseY, isVisible: true });
  }
  ///////moon stuff///////////
    if (mouseX > moonX && mouseX < moonX + moon.width && mouseY > moonY && mouseY < moonY + moon.height) {
    dragging = true;
    // Calculate the offset from the top of the moon
    offsetY = mouseY - moonY;
  }
  ///////firefly stuff///////////
    if (mouseX > 50 && mouseX < 100 && mouseY > 50 && mouseY < 100) {
    // Toggle the time signature between 3/4 and 4/4
  if (timeSignature.toString() === [3, 4].toString()) {
    timeSignature = [4, 4];
  } else {
    timeSignature = [3, 4];
  }

    }
  
  // Determine which cell the mouse is on
  let i = floor(mouseX / w);
  let j = floor(mouseY / h);
  
  // Toggle cell on/off
  cells[j][i] = !cells[j][i];



//  }
}

function togglePlay(){
  if(Tone.Transport.state == "started"){
  	Tone.Transport.stop();
    playButton.html('play');
  }
  else{
    if(player.loaded){
    	Tone.Transport.start();
    	playButton.html('stop');
    }
  }	
}

function mouseDragged() {
  if (dragging) {
    // Constrain moon movement to the canvas's vertical range
    moonY = constrain(mouseY - offsetY, 0, height - moon.height);
    // Change BPM based on moon's Y position
    bpm = map(moonY, 0, height - moon.height, 60, 190);
    Tone.Transport.bpm.value = bpm;
  }
}

function mouseReleased() {
  dragging = false;
}
