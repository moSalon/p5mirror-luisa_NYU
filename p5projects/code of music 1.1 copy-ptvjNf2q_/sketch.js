const pink = new SimplePlayer("sounds/pink.wav");
pink.toDestination();

const tears = new SimplePlayer("sounds/tears.wav");
tears.toDestination();

let loaded = false;
// vars for Pink sound
let s = 0;
let x, y;

// vars for Tears sound
let easing = 0.1;
let target = 200;
let start = 0;
let xRect = start;
let yRect = 200;

function setup() {
  createCanvas(400, 400);  
}


function draw() {
  background(0);
  
  // Pink
  s = map(pink.progress(), 0, 1, 0, width);
  fill(100,200,300);
  rect(x,y,s,s);
  
  // Tears
  // let xRect = map(tears.progress(), 0, 1, 0, width);
    xRect = xRect + tears.progress() * 0.5 *(width-50-xRect);
7
     
  fill(300,200,100);
  rect(xRect, 150, 100, 50, 20);
}

function keyTyped() {
  if(loaded) {
    if(key == 'a'){
      pink.start();
      x = random(0, width/2);
      y = random(0, height/2);
    }
    else if(key == 's'){
      tears.start();
      xRect = 0;
    }
  }
}

Tone.loaded().then(function(){
  loaded = true;
});

