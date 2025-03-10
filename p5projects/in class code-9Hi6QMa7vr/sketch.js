const sound1 = new SimplePlayer("sounds/blip.wav");
sound1.toDestination();
const sound2 = new SimplePlayer("sounds/pink.wav");
sound2.toDestination();
const sound3 = new SimplePlayer("sounds/takerimba.wav");
sound3.toDestination();
const sound4 = new SimplePlayer("sounds/tears.wav");
sound4.toDestination();

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  let x = map(sound1.progress(), 0, 50, 0, width);
  ellipse(x, 100, 40, 40);
//   console.log(sound1.progress());
}

// function mouseClicked(){
//   if(loaded){
//     sound.start();  
//   }
// }

function keyTyped() {
  if(loaded){
    if(key == 'a'){
      sound1.start();
    }
    else if(key == 's'){
      sound2.start();
    }
    else if(key == 'd'){
      sound3.start();
    }
    else if(key == 'f'){
      sound4.start();
    }
  }
}

let loaded = false;
Tone.loaded().then(function(){
  loaded = true;
});

// let loaded = false;
// Tone.loaded().then(thisIsJustMySillyFunctionName)

// function thisIsJustMySillyFunctionName(){
//   loaded = true;
// }


