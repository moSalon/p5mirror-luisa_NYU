let gif1;
let gif2;

function preload(){
  gif1 = createImg("giphy.webp"); 
  gif2 = createImg("giphy.webp");
}

function setup() {
  createCanvas(400, 400);
  
}


function draw() {
  background(220);
  // image(myGif, 0, 0);
  gif1.position(0, 0);
  gif2.position(0, 300);
}