/**
 * demonstrates how to load a GIF image using
 * createImg to create an <img> on the page
 * and to use that to update animation
 * (and illustrates how p5's loadImage loads only
 * one frame otherwise).
 */

var gif_loadImg, gif_createImg;

function preload() {
  gif_loadImg = createImage("https://media.giphy.com/media/7kn27lnYSAE9O/giphy.gif");
  gif_createImg = createImg("vegetables.gif");
}

function setup() {
  createCanvas(500, 700);
  background(0);
}

function draw() {
  // loads only first frame
  gif_loadImg.position(50, 50);
  
  // updates animation frames by using an html
  // img element, positioning it over top of
  // the canvas.
  gif_createImg.position(50, 350);
}
