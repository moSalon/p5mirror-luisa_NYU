//variations: FMsynth & MONOsynth, harmonicity, modulation, vibrato, tremolo, attack & decay, note, synth waveforms
let shapes = [];
let fmSynth;
let tremolo; 

function setup() {
    createCanvas(500, 500);
    noStroke();

    fmSynth = new Tone.FMSynth();
    // monoSynth = new Tone.MonoSynth().toDestination();    
    tremolo = new Tone.Tremolo({frequency: 4, depth: 1});
    fmSynth.connect(tremolo);
    tremolo.toDestination();

    shapes.push(new MovingShape('circle'));
    shapes.push(new MovingShape('square'));
}

function draw() {
  background(0, 15);
 
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    for (let shape of shapes) {
        shape.move();
        shape.display();
    }
}


//https://p5js.org/reference/p5/class/
//random size from 20-80, movement, color
//if the size is less than 50, it's monosynth, if bigger it's fmsynth
class MovingShape {
    constructor(type) {
        this.type = type;
        this.size = random(20, 80);
        this.x = random(width);
        this.y = random(height);
        this.speedX = random(1, 3) * (random() > 0.5 ? 1 : -1)/1.5;
        this.speedY = random(1, 3) * (random() > 0.5 ? 1 : -1)/1.5;
        this.color = color(random(255), random(255), random(255));
        this.defaultColor = this.color;
        this.synth = this.size > 50 ? fmSynth : fmSynth; // To do, add a different kind of synth later.;
        this.tremolo = tremolo;
    }

//drawing the shapes 
  display() {
        fill(this.color);
        if (this.type === 'circle') {
            ellipse(this.x, this.y, this.size);
        } else if (this.type === 'square') {
            rect(this.x, this.y, this.size, this.size);
        } else if (this.type === 'triangle') {
            triangle(
                this.x, this.y - this.size/2,
                this.x - this.size/2, this.y + this.size/2,
                this.x + this.size/2, this.y + this.size/2
            );
        }
    }

// move shapes and bounce off edges
    move() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;

//the changes of sound. the y axis is on the harmonicity and the x axis is on modulation
      // this.synth.set({
      //       harmonicity: map(this.y, 0, height, 0.5, 2),
      //       modulationIndex: map(this.x, 0, width, 0, 10)
      //   });
      // this.tremolo.set({ 
      //                     frequency: map(this.x, 0, width, 2, 20), 
      //                     // depth: map(this.y, 0, height, 0, 1)
      //                  });
    }
//play random middle octave sound and change color 
//https://tonejs.github.io/docs/14.8.35/FMSynth#triggerattackrelease
//https://tonejs.github.io/docs/15.0.4/classes/Envelope.html
    playSound() {
        this.synth.triggerAttack("C4", '8n');
        this.color = color(255); // Change color to white
        setTimeout(() => this.color = this.defaultColor, 100); // Revert color
    }
    stopSound(){
      this.synth.triggerRelease(0, "C4");
    }
}

// play sound when clicked 
//https://p5js.org/reference/#/p5/dist
function mousePressed() {
    for (let shape of shapes) {
        if (dist(mouseX, mouseY, shape.x, shape.y) < shape.size ) {
            shape.playSound();
            break;
        }
    }
}

function mouseReleased(){
  for (let shape of shapes) {
    shape.stopSound();
  }
}
