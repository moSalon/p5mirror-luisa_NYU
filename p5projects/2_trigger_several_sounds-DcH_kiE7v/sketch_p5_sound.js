// The Code of Music
// Luisa Pereira
// http://thecodeofmusic.net/

let blip;
let pink;
let tears; 
let takerimba; 


function preload(){
  blip = loadSound('sounds/blip.wav');
  pink = loadSound('sounds/pink.wav');
  tears = loadSound('sounds/tears.wav');
  takerimba = loadSound('sounds/takerimba.wav');
}

function setup() {
  createCanvas(600, 400);
  background(100, 233, 100);
}

function draw() {

}

function keyTyped(){
	if(key == 'a'){
      blip.play();
    }
    else if(key == 's'){
      pink.play();
    }
    else if(key == 'd'){
      tears.play();
    }
    else if(key = 'f'){
      takerimba.play();
    }
}