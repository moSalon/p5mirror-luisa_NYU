let synth = new Tone.PolySynth(Tone.Synth).toDestination();
let littleMermaidScore;

let parts = [];

function preload(){
    //load json file
    littleMermaidScore = loadJSON("json_scores/pachelbel-canon.json");
}

function setup(){
    // for each track, create a part and add it to the parts array
    for (let i = 0; i < littleMermaidScore.tracks.length; i++) {
        let part = new Tone.Part(playNote, littleMermaidScore.tracks[i].notes);
        parts.push(part);        
    }
    //for each part, start it
    for (let i = 0; i < parts.length; i++) {
        parts[i].start(0);
    }
    
    
    
}

function playNote(time, value){
    console.log(time, value);
    synth.triggerAttackRelease(new Tone.Frequency(value.midi, "midi"), value.duration, time, value.velocity);
}

function mousePressed(){
    Tone.Transport.start(); 
}




