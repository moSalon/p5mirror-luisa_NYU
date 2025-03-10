let shakeAmount = 0;
const maxShake = 10;
const decayFactor = 0.9; // How quickly the shake effect fades

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Calculate random offset for shake effect
  let xOffset = random(-shakeAmount, shakeAmount);
  let yOffset = random(-shakeAmount, shakeAmount);
  
  // Apply the shake by translating the canvas
  translate(xOffset, yOffset);
  
  // Clear background and draw something
  background(220);
  fill(50, 100, 200);
  circle(width/2, height/2, 100);
  
  // Decay the shake amount over time
  shakeAmount *= decayFactor;
}

function mousePressed() {
  // Trigger shake effect
  shakeAmount = maxShake;
}

