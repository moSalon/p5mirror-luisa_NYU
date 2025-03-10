let loaded = false;

function setup() {  
  noCanvas();

}

function draw() {
  // not drawing anything for now
}

Tone.loaded().then(function(){  
  loaded = true;
});



