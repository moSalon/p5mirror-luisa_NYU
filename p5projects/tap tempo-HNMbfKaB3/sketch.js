let timestamps = [];
const maxTimestamps = 5;
let averageInterval = 0;

Tone.Transport.start();

function setup() {
  createCanvas(400, 400);
  background(200);
  textAlign(CENTER, CENTER);
  textSize(32);
}

function draw() {
  background(200);
  fill(0);
  text(round(averageInterval) + " bpm", width / 2, height / 2);
}

function mousePressed() {
  // Get the current time from Tone.js
  let currentTime = Tone.now();

  // Add the current timestamp to the array
  timestamps.push(currentTime);

  // Limit the array to the last n timestamps
  if (timestamps.length > maxTimestamps) {
    timestamps.shift();
  }

  // Calculate the average interval between taps
  if (timestamps.length > 1) {
    let intervals = [];
    for (let i = 1; i < timestamps.length; i++) {
      // Calculate time difference between consecutive taps
      let interval = timestamps[i] - timestamps[i-1];
      intervals.push(interval);
    }
    
    // Calculate average interval
    let sum = 0;
    for (let i = 0; i < intervals.length; i++) {
      sum += intervals[i];
    }
    let avgSeconds = sum / intervals.length;
    
    // Convert to BPM (60 seconds / average interval in seconds)
    averageInterval = 60 / avgSeconds;
  }
}
