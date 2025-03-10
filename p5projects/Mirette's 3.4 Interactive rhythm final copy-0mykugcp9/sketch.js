let kit = new Tone.Players({
  "kick": "samples/505/kick.mp3", 
  "snare": "samples/505/snare.mp3",
  "hh": "samples/505/hh.mp3",
  "hho": "samples/505/hho.mp3",
  "drum1": "samples/505/sharqy1.wav",
  "drum2": "samples/505/sharqy2.WAV",
  "drum3": "samples/505/sharqy3.wav",
});
kit.toDestination();

let loop; 
var cells = [0, 0, 0, 0];
let beatDuration = "4n"; // Default beat duration
let currentBPM = Math.floor(Tone.Transport.bpm.value); // Initialize BPM variable
// Function to start scheduling the beat
function startScheduling() {
  loop = new Tone.Loop(playBeat, beatDuration);
  loop.start();
}

startScheduling(); // Start scheduling the beats

function playBeat(time) {
  // Make sure the sound files have been completely loaded
  if (kit.loaded) {
    let beat = Math.floor(Tone.Transport.position.split(":")[1]) % 4; // Get the current quarter note position

    if (cells[beat] == 1) {
      switch (beat) {
        case 0: // Top-left (snare)
          kit.player("drum1").start(time);
          break;
        case 1: // Top-right (kick)
          kit.player("drum2").start(time);
          break;
        case 2: // Bottom-left (hh)
          kit.player("hh").start(time);
          break;
        case 3: // Bottom-right (hho)
          kit.player("drum3").start(time);
          break;
      }
    }
  }
}

// Keyboard input handling
function keyPressed() {
  if (keyCode === UP_ARROW && Tone.Transport.bpm.value <= 300) {
    // Increase the BPM (make it faster)
    Tone.Transport.bpm.value += 40; // Increase BPM by 40
    console.log(`BPM increased to: ${Tone.Transport.bpm.value}`);
  } else if (keyCode === DOWN_ARROW && Tone.Transport.bpm.value > 60) {
    // Decrease the BPM (make it slower)
    Tone.Transport.bpm.value -= 40; // Decrease BPM by 40
    console.log(`BPM decreased to: ${Tone.Transport.bpm.value}`);
  } else if (keyCode == 50 ) {
    loop.interval = "2n";    
    console.log(`Beat changed to: ${loop.interval}`);
  } else if (keyCode == 52 ) {
    loop.interval = "4n";    
    console.log(`Beat changed to: ${loop.interval}`);
  } else if (keyCode == 56 ) {
    loop.interval = "8n";    
    console.log(`Beat changed to: ${loop.interval}`);
  }
  
  
  currentBPM = Math.floor(Tone.Transport.bpm.value); 
  drawQuadrants();
}

// Function to update the transport with the new beat duration
function updateTransport() {
  Tone.Transport.clear(); // Clear existing scheduling
  startScheduling(); // Re-schedule with the new duration
}

let colors = [
  [184, 186, 207],  // Default color for top-left 
  [210, 213, 221],  // Default color for top-right 
  [210, 213, 221],  // Default color for bottom-left 
  [184, 186, 207]   // Default color for bottom-right 
];

const clickColor = [70, 77, 119]; // The color when a quadrant is clicked

function setup() {
  createCanvas(400, 400); 
  noStroke();
  drawQuadrants();
}

function drawQuadrants() {
  fill(cells[0] ? clickColor : colors[0]);
  rect(0, 0, width/2, height/2, 0, 0, 70, 0); // Top-left
  fill(cells[1] ? clickColor : colors[1]);
  rect(width/2, 0, width/2, height/2, 0, 0, 0, 70); // Top-right
  fill(cells[2] ? clickColor : colors[2]);
  rect(0, height/2, width/2, height/2, 0, 70, 0, 0); // Bottom-left
  fill(cells[3] ? clickColor : colors[3]);
  rect(width/2, height/2, width/2, height/2, 70,0,0); // Bottom-right
  
  fill(134, 108, 142);
  ellipse(width/2, height/2, 50);
  fill(255);
  text('Random', width/2-22, height/2+4);
  fill(255);
  text(`BPM: ${currentBPM}`, width/2-30, height-6);
  // text(`Beat: ${beatDuration}`, width/2-27, height-19);
}

function mousePressed() {
  if (kit.loaded) {
    if (mouseX < width/2 && mouseY < height/2&& (mouseX < width/2-20 && mouseY < height/2-10  )) { // Top-left 
      cells[0] = !cells[0];
    }
    if (mouseX > width/2 && mouseY < height/2&& (mouseX >width/2+20 && mouseY <height/2-10 )) { // Top-right 
      cells[1] = !cells[1];
    }
    if (mouseX < width/2 && mouseY > height/2 && (mouseX < width/2-20 && mouseY >height/2+10)) { // Bottom-left 
      cells[2] = !cells[2];
    }
    if (mouseX > width/2 && mouseY > height/2 && (mouseX >width/2+20 && mouseY >height/2-10 )) { // Bottom-right 
      cells[3] = !cells[3];
    }
  }

  if(mouseX > width/2-25 && mouseX < width/2+25 && mouseY > height/2-25 && mouseY < height/2+25) {
    cells = [random([0, 1]), random([0, 1]), random([0, 1]), random([0, 1])]; // Randomize sounds on click
    Tone.Transport.bpm.value = random(60,300);
    currentBPM = Math.floor(Tone.Transport.bpm.value); 
  }
  drawQuadrants(); // Redraw the quadrants with the click color
}

// Once all audio files have been loaded, start the Tone playhead
Tone.loaded().then(function() {
  console.log("loaded");
  Tone.Transport.start();
});

