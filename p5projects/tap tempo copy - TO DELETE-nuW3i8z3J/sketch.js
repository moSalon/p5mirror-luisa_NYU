let timestamps = [];
const maxTimestamps = 8;
let bpm = 0;

let clickTime = 0;
let bgColor = 200;
let yellowDuration = 100; //milliseconds

Tone.Transport.start();

function setup() {
  createCanvas(200, 200);
  background(200);
  textAlign(CENTER, CENTER);
  textSize(32);
}

function draw() {
  background(bgColor);
  fill(0);
  text(bpm, width / 2, height / 2);
  text("bpm", width / 2, height / 2 + 40);
  
  if (millis() - clickTime > yellowDuration) {
    bgColor = 200; // Reset to gray
  }
}

function mousePressed() {
  bgColor = color(255, 255, 0);
  clickTime = millis();
  
  // Get the current time from Tone.js
  let currentTime = Tone.now();

  // Add the current timestamp to the array
  timestamps.push(currentTime);

  // Limit the array to the last 10 timestamps
  if (timestamps.length > maxTimestamps) {
    timestamps.shift();
  }

  // Calculate the average interval between taps
  if (timestamps.length > 1) {
    let sum = 0;
    
    // Calculate intervals between consecutive taps
    for (let i = 1; i < timestamps.length; i++) {
      sum += timestamps[i] - timestamps[i - 1];
    }

    // Calculate the average interval
    let averageInterval = sum / (timestamps.length - 1);

    // Convert the average interval to BPM
    bpm = round(60 / averageInterval, 2);
  }
}
