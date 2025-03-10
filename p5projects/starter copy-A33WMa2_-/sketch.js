const blip = new SimplePlayer("sounds/blip.wav");
blip.toDestination();

const pink = new SimplePlayer("sounds/pink.wav");
pink.toDestination();

const takerimba = new SimplePlayer("sounds/takerimba.wav");
takerimba.toDestination();

const tears = new SimplePlayer("sounds/tears.wav");
tears.toDestination();

let loaded = false;

function setup() {
  createCanvas(400, 400);
}

let x = 0;
function draw() {
  background(0);
  x = map(tears.progress(), 0, 1, 0, width);
  ellipse(x, height/2, 50, 50);
}

function keyTyped() {
  if(loaded) {
    if(key == 'a'){
      blip.start();
    }
    else if(key == 's'){
      pink.start();
    }
    else if(key == 'd'){
      takerimba.start();
    }
    else if(key == 'f'){
      tears.start();
    }
  }
}

Tone.loaded().then(function(){
  loaded = true;
});

