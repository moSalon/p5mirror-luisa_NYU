let loaded = false;
console.log("loading...");

const bass = new Tone.Player({
  url: "loops/Bass0.mp3",
  loop: true
}).toDestination();

const chords = new Tone.Player({
  url: "loops/Chords0.mp3",
  loop: true
}).toDestination();

const drums = new Tone.Player({
  url: "loops/Drums0.mp3",
  loop: true
}).toDestination();


const melody = new Tone.Player({
  url: "loops/Melody0.mp3",
  loop: true
}).toDestination();

function setup() {  
  noCanvas();

}

function keyTyped(){
  if(loaded){
    if(key == 'a'){
      if(drums.state == "stopped"){
        drums.start();  
      }
      else{
        drums.stop();
      }      
    }
    if(key == 's'){
      if(bass.state == "stopped"){
        bass.start(); 
      }
      else{
        bass.stop();
      }      
    }
    if(key == 'd'){
      if(chords.state == "stopped"){
        chords.start(); 
      }
      else{
        chords.stop();
      }      
    }
    if(key == 'd'){
      if(melody.state == "stopped"){
        melody.start(); 
      }
      else{
        melody.stop();
      }      
    } 
    
  }
}

function draw() {
  // not drawing anything for now
}

Tone.loaded().then(function(){  
  loaded = true;
  console.log("loaded");
});



