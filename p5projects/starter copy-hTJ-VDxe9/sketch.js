const blip = new SimplePlayer("sounds/blip.wav");
blip.toDestination();

const pink = new SimplePlayer("sounds/pink.wav");
pink.toDestination();

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  console.log(pink.progress());
}

function mouseClicked() {
  // if (loaded) {
  //   blip.start();
  // }
}

function keyTyped() {
  if (loaded) {
    if (key == "a") {
        blip.start();     

    } else if(key == "s"){
        pink.start();
    }
    
  }
}

let loaded = false;

Tone.loaded().then(function () {
  loaded = true;
});
