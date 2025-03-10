/* PDM Course: Sound Unit

Example of Tone.js PitchShift Effect

Code by Anthony T. Marasco [2018]
*/


let player;

let shifter;
let reverb;
let button;
let shiftSlider;

let revSlider; 

function preload(){
  
  /*Here is where we build our audio effect, and connect its output directly to the master output */
  shifter = new Tone.PitchShift(2).toDestination();
  // reverb = new Tone.Reverb({decay: 0.5, 
  //                             wet: 0}).toDestination();
  
  /* Here is where we build our Samplers and connect their outputs to the input of the audio effect. We do this using the .connect() method, and passing in the variable name of the effect we want to connect to*/
 
  player = new Tone.Player("samples/decemberloop.mp3").connect(shifter);
 // .connect(reverb); 
  player.loop = true;
player.retrigger = true;
}

function setup() {
  createCanvas(windowWidth,windowHeight);
   
  // revSlider = createSlider(0, 2);
  // revSlider.style("width","200px");
  // revSlider.position(width/2-100, height/2+80);
  // revSlider.input(updateReverb);
  
  shiftSlider= createSlider(-12,12,2,1);
  shiftSlider.style("width","200px");
  shiftSlider.position(width/2-100, height/2+150);
  
  
  button =createButton("Stop/Start Sound");
  button.position(width/2-50, height/2);
  button.mousePressed(play1);
}

function draw() {
 /*Avoiding putting any sound triggering functions in draw() for this example
  */
  
  //shifter.wet.value = wetMix.value();
  // shifter.pitch =shiftSlider.value();
  shifter.set({pitch:shiftSlider.value()});
  //reverb.decay = revSlider.value();
  //shifter.pitch.hide();
 
  
  background(50);
 
  
   for (var x = 0; x < width; x += width / 3) {
		for (var y = 0; y < height; y += height / 3) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
 
}

function play1(){
  if (player.state == "stopped") {
      player.start();
    } else {
      player.stop();
    }
}

function mouseDragged() {
  // //rows play the pitch
  //  if(mouseY>0 && mouseY<height/3) {
  //   shifter.pitch =shiftSlider.value(-1);
  // } 
  // if(mouseY>width/3 && mouseY<height*2/3) {
  //   shifter.pitch =shiftSlider.value(0);
  // }
  // if(mouseY>width*2/3 && mouseY<height) {
  //   shifter.pitch =shiftSlider.value(1);
  // }
  
  //columns control the reverb
  
//     if(mouseX>0 && mouseX<width/3) {
//     reverb.decay = revSlider.value(-1);
//   } 
//   if(mouseX>width/3 && mouseX<width*2/3) {
//     reverb.decay = revSlider.value(0);
//   }
//   if(mouseX>width*2/3 && mouseX<width) {
//     reverb.decay = revSlider.value(1);
//   }
}

// function updateReverb(){
//   console.log(revSlider.value());
//   reverb.set({wet: revSlider.value()});
  
// }


