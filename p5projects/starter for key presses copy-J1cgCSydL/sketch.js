const blip = new SimplePlayer("sounds/blip.wav");
blip.toDestination();

const pink = new SimplePlayer("sounds/pink.wav");
pink.toDestination();

function preload(){
  // load sounds
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0); 
  fill(0, 0, 255);
  //console.log(pink.progress());
  let x = map(pink.progress(), 0, 1, 0, width);
  ellipse(x, height/2, 100, 100);
  
  fill(0, 255, 0);
  let y = map(blip.progress(), 0, 1, 0, height);
  ellipse(width/2, y, 30, 30);
  
}

let loaded = false;

function keyTyped(){
  if(loaded){
    if(key == 'a' ) {
       blip.start();  
    }
    if(key == 's' ) {
       pink.start();  
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


