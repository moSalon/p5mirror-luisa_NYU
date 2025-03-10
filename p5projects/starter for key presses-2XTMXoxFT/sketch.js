const blip = new SimplePlayer("sounds/blip.wav");
blip.toDestination();

function preload(){
  // load sounds
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);  
}

let loaded = false;

function keyTyped(){
  if(loaded){
    if(key == 'a' ) {
       blip.start();  
    }
  }
}


// with anonymous function
Tone.loaded().then(
  function(){
    loaded = true;
  }
)


// Tone.loaded().then(
//   thisIsMyFunction
// )
// function thisIsMyFunction(){
//   loaded = true;
// }


