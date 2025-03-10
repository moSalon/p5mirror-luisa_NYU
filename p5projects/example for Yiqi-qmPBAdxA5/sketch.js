let xRed; 
let xGreen;
let r = 40;
function setup() {
  createCanvas(400, 400);
  // test position: RED GREEN
  // xRed = 100; 
  // xGreen = 200;
  // test position GREEN RED
  xRed = 200; 
  xGreen = 100;
}

function draw() {
  
  background(220);
  let dis = dist(xRed, 200, xGreen, 200);
  
  // if the green square is to the left of the red square (green red)
  // xGreen should be larger than left edge and
  // xGreen should be smaller than xRed (or: should be far enough from it)
  if(xGreen < xRed){
    if(keyIsDown(LEFT_ARROW) &&
      xGreen > -r/2) {
      xGreen -= 5;
    }
    else if (keyIsDown(RIGHT_ARROW) &&
      dis > r) {
      xGreen += 5;
    }
  }
  // if the red square is to the left of the green square (red green)
  // xGreen should be larger than xRed
  // xGreen should be smaller the right edge
  else{
    if(keyIsDown(LEFT_ARROW) &&
      dis > r) {
      xGreen -= 5;
    }
    else if (keyIsDown(RIGHT_ARROW) &&
      xGreen < width - r/2) {
      xGreen += 5;
    }
  }

  fill(0, 255, 0);
  rect(xGreen, 200, r, r);
  fill(255, 0, 0);
  rect(xRed, 200, r, r);
}