let loaded = false;

const sound = new SimplePlayer("sounds/blip.wav");
sound.toDestination();

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
}

function mouseClicked(){
  if(loaded){
    sound.start();
  }
}

Tone.loaded().then(function(){
	loaded = true;
});

