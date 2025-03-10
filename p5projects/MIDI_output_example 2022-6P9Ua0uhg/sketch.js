let midiOutput;
let button;

function setup() {
  noCanvas();
  
  button = createButton("Click Me", width/2, height/2);
  button.mousePressed(buttonPressed);
}

function buttonPressed(){
	if(midiOutput){
		// Play note "C2" on channel 10 for half a second and with 0.5 velocity
  	// (a noteOff message will be sent in half a second)
		midiOutput.playNote("C3", 10, {duration: 500, velocity: 1});
	}
	else{
		console.log("Looks like there is no MIDI output device.");
	}
  
}

WebMidi.enable(function (err) {
  if (err) {
    console.log("WebMidi could not be enabled.", err);
  }
  
  // Print available MIDI outputs
  for(let i = 0; i < WebMidi.outputs.length; i++){
  	console.log(WebMidi.outputs[i].name);
  }
  
  // From the list on the console, pick an output name:
  midiOutput = WebMidi.getOutputByName("IAC Driver Bus 1");

});