window.registerP5Sketch((p) => {
  const colorPrimary = '#ff3100';
  const sketchHeight = 250;
  const barHeight = 15;

  
  let player = new Tone.Player(
    `sound/kill_bill_whistle_short.mp3`
  );

  let fft = new Tone.FFT();
  let meter = new Tone.Meter();
  meter.normalRange = true;
  player.connect(meter);
  player.connect(fft);
  player.toDestination();

  p.setup = () => {
    const pad = 10;
    p.createCanvas(p.windowWidth, sketchHeight);

    const playBtn = p.createButton('play');
    playBtn.class('play-button');
    playBtn.mouseReleased(() => {
      if (player.state == 'started') {
        player.stop();
        playBtn.html('play');
      } else {
        player.start();
        playBtn.html('stop');
      }
    });
    playBtn.position(pad, p.height - 56);

    /* Custom load handler */
    if (p.onLoaded) {
      p.onLoaded();
    }
  };

  p.draw = () => {
    const w = p.width;
    const h = p.height;
    p.background(255);
    p.noStroke();

    if (player.state === 'started') {
      let frequencyData = fft.getValue();
      let meterData = meter.getValue();
      let max = -Infinity;
      let f;
      for (let i = 0; i < frequencyData.length; i++) {
        if (frequencyData[i] > max) {
          max = frequencyData[i];
          f = i;
        }
      }
      //option 1: both pitch and meter
      // let fHeight = p.map(f, 50, 120, 0, h);
      // fHeight = p.constrain(fHeight, 0, h);
      // let s = p.map(meterData, 0, 1, 40, 255);
      // p.colorMode(p.HSB);
      // p.fill(0, s, 100);
      // p.rect(0, h - fHeight - barHeight / 2, w, barHeight);
      
      //option 2: rectangle, just meter
      let sat = p.map(meterData, 0, 1, 40, 255);
      let w = p.map(meterData, 0, 1, 100, 160);
      let h = p.map(meterData, 0, 1, barHeight, barHeight + 20);
      p.colorMode(p.HSB);
      p.rectMode(p.CENTER);
      p.fill(0, sat, 100);
      p.rect(p.width/2, p.height/2, w, w);
    }
  };
});