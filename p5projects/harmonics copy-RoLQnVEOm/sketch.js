let n = 5;
let osc = [];
let sliders = [];
let f = 220;

function setup(){
  for(let i = 0; i < n; i++){
    osc[i] = new Tone.Oscillator(f, "sine");
    f = f * i; 
    osc[i].volume.value = -12;
    osc[i].toMaster();
    
    sliders[i] = createSlider(-24, 0, -12);
    sliders[i].style('display:block');
    sliders[i].id = i;
    sliders[i].input(updateVolume);
  }
}

function mousePressed(){
  for(let i=0; i < n; i++){
    osc[i].start();
  }
}

function mouseReleased(){
  for(let i=0; i < n; i++){
    osc[i].stop();
  }
}

function updateVolume(){
  let o = osc[parseInt(this.id)];
  o.volume.value = this.value();
}


