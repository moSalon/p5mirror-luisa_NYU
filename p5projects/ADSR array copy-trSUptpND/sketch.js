// Press any key to play 
// Use sliders to change harmonics amount

let n = 10;
let osc = [];
let slider = [];
let envelope = []; 
let f = 220;

function setup(){
  for(let i=0; i < n; i++){
    osc[i] = new Tone.Oscillator(f, "sine");
    f = f + f*i;
    osc[i].volume.value = -12;
    
    envelope[i] = new Tone.AmplitudeEnvelope({
      "attack": 1,
      "decay": 0.6,
      "sustain": 1.0,
      "release": 0.9
    }).toMaster();
    osc[i].connect(envelope[i]);
    
    slider[i] = createSlider(-24, 0, -12);
    slider[i].style('display:block');
    slider[i].id = i;
    slider[i].input(updateVolume);
  }
}

function mousePressed(){
  for(let i=0; i < n; i++){
    osc[i].start();
  }
}

function updateVolume(){
  let o = osc[parseInt(this.id)];
  o.volume.value = this.value();
}


function keyPressed() {
  for(let i=0; i < n; i++){
    envelope[i].triggerAttack();
  }
}

function keyReleased() {
for(let i=0; i < n; i++){
    envelope[i].triggerRelease();
  }
}


