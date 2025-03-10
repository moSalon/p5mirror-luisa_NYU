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
  let x = map(sound.progress(), 0, 1, 0, width);
  ellipse(x, height/3, 100, 100);
}

function mouseClicked(){
  if(loaded){
    sound.start();
  }
}

Tone.loaded().then(function(){
  loaded = true;
});
