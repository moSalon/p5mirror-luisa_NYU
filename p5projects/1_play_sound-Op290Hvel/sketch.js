// The Code of Music
// Luisa Pereira
// http://thecodeofmusic.net/


const sound = new SimplePlayer("sounds/blip.wav");
sound.toDestination();

let loaded = false;

function setup(){
  createCanvas(100,100);
}

function draw(){
  if(loaded){
   background(220); 
  }
  else{
    background(220);
    text("loading...", 20, 20);
  }
}

function mouseClicked(){
  if(loaded){
    sound.start();
  }
}

Tone.loaded().then(function(){
  loaded = true;
});
