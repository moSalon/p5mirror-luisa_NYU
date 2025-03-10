let img;
let numY = 12; // division
let widthX=10;
let blockWidth, blockHeight;
let currentBlockX = 0; // 当前长方体的位置
let scannedPixels = []; // 已经扫描过的像素位置
let pixelBlockY=[];

/*normal Distribution*/
let numLevels = 12; // 灰度等级数量
let mean = 127.5; // 平均值
let standardDeviation = 50; // 标准差

//midi pitch
let synth = new Tone.PolySynth();
synth.toDestination();
let startNote = 60;


// let blackKeys = [61, 63, 66, 68, 70, 73, 75, 78, 80, 82, 85, 87, 90, 92, 94];
let blackKeys = [61, 63, 66, 68, 70, 73, 75, 78, 80, 82, 85, 87, 90, 92, 94];
// let blackKeys = [61, 63, 66, 68, 70];
let index=-1;


function preload() {
  img = loadImage('cat.jpg');
  // img = loadImage('simpelDraw.jpg');
}

function setup() {
  createCanvas(400, 400);
  /*randomize each pixel’s color on the canva*/
//   img = createImage(400, 400);
//   img.loadPixels();
  
//   for (let y = 0; y < height; y++) {
//     for (let x = 0; x < width; x++) {
//       let index = (x + y * width) * 4;
//       img.pixels[index] = random(255);     // red
//       img.pixels[index + 1] = random(255); // green
//       img.pixels[index + 2] = random(255); // blue
//       img.pixels[index + 3] = 255;         // alpha
//     }
//   }
//   img.updatePixels();
  img.resize(700, 400); // 
  image(img, -150, -10);
  
  // 计算每个块的宽度和高度
  // blockWidth = width / numY;
  blockHeight = height / numY;
}
  

function draw() {
  
  clear();
  image(img, -150, -10);
 
  // 移动长方体并检查每个块内的主要灰度等级
//   if (currentBlockX >= width) {
//     currentBlockX=0;

//   }
//   let i = floor(currentBlockX / widthX);//第i格
//   // let j = floor(random(blockSize));//遍历y
  
//       /*确保像素不重复扫描*/  
//       // if (!scannedPixels.includes(j)) {
//       // scannedPixels.push(j);
//   let count=new Array(numLevels).fill(0);
//   for(let j=numY-1;j>=0;j--){
//     let startX = floor(currentBlockX);
//     let startY = floor(j * blockHeight);
//     let endX = startX + widthX;
//     let endY = startY + blockHeight;
//     let grayLevels = [];
      
//       /* 获取块内每个像素的灰度值*/
//     for (let y = startY; y < endY; y++) {
//       for (let x = startX; x < endX; x++) {
//         let c = img.get(x, y);
//         let gray = brightness(c);
//         grayLevels.push(gray);
        
//         // let grayLevel = mapToGrayLevel(gray);
//         // count[grayLevel]++;
//         // grayLevels.push(grayLevel);

//       }
//     }

//       // Average
//     let avgGray = grayLevels.reduce((a, b) => a + b, 0) /   grayLevels.length;
// //     let level=map(avgGray,80,86,0,11)
// //     if ((level)<=3){
// //       pixelBlockY[j]=0
        
// //     }else{
// //       pixelBlockY[j]=1
// //     }
//     pixelBlockY[j]=avgGray;

//   let darkest=0;

//   for(let i=1;i<numLevels;i++){
//     if(pixelBlockY[i]>pixelBlockY[darkest]){
//       darkest=i;
//       console.log(darkest)
//     }
//   }
  // }
  fill(255,200)
  noStroke();
  rect(currentBlockX,0,widthX,height)
  fill(255,255,100)
  stroke(255,255,200)
  strokeWeight(3)
  rect(currentBlockX,index*blockHeight,widthX,blockHeight)

  
  /*******/
  // }

}

function mousePressed(){
  
  
  currentBlockX += widthX;
  
  index=scanGray();
  console.log("index"+index)

  let noteObject = Tone.Frequency(blackKeys[index], "midi");
  synth.triggerAttack(noteObject);
  
    
  // let pos = parseInt(key) % 9 - 1;
  
  // for(let i=0;i<numY;i++){
  //   if(pixelBlockY[i]==1){
  //     let noteObject = Tone.Frequency(computedScale[pos], "midi");
  //     synth.triggerAttack(noteObject);
  //   }
  // }
}

function mouseReleased(){
  // for(let i=0;i<numY;i++){
  //     synth.triggerRelease();
  // }
  synth.triggerRelease();
  
}

function keyPressed(){
//auto play
    
}

function keyReleased(){
  synth.triggerRelease();
}

function scanGray(){
   
  // 移动长方体并检查每个块内的主要灰度等级
  if (currentBlockX >= width) {
    currentBlockX=0;

  }
  let i = floor(currentBlockX / widthX);//第i格
  // let j = floor(random(blockSize));//遍历y
  
      /*确保像素不重复扫描*/  
      // if (!scannedPixels.includes(j)) {
      // scannedPixels.push(j);
  let count=new Array(numLevels).fill(0);
  for(let j=numY-1;j>=0;j--){
    let startX = floor(currentBlockX);
    let startY = floor(j * blockHeight);
    let endX = startX + widthX;
    let endY = startY + blockHeight;
    let grayLevels = [];
      
      /* 获取块内每个像素的灰度值*/
    for (let y = startY; y < endY; y++) {
      for (let x = startX; x < endX; x++) {
        let c = img.get(x, y);
        let gray = brightness(c);
        grayLevels.push(gray);
        
        // let grayLevel = mapToGrayLevel(gray);
        // count[grayLevel]++;
        // grayLevels.push(grayLevel);

      }
    }

      // 计算灰度值的平均
    let avgGray = grayLevels.reduce((a, b) => a + b, 0) / grayLevels.length;
//     let level=map(avgGray,80,86,0,11)
//     if ((level)<=3){
//       pixelBlockY[j]=0
        
//     }else{
//       pixelBlockY[j]=1
//     }
    pixelBlockY[j]=avgGray;
    
    
    
    //最多
    // let maxCount = 0;
    // let maxGrayLevel = 0;
    // for (let i = 0; i < numLevels; i++) {
    //   if (count[i] > maxCount) {
    //     maxCount = count[i];
    //     maxGrayLevel = i;
    //   }
    // }
    // pixelBlockY[j]=maxGrayLevel;
    // pixelBlockY[j]=round(avgGray/255*12);


    // console.log("gray level: " + level+","+pixelBlockY+"/n");

    
    
  }
  let darkest=0;

  for(let i=1;i<numLevels;i++){
    if(pixelBlockY[i]>pixelBlockY[darkest]){
      darkest=i;
      console.log(darkest)
    }
  }
  return darkest+round(random(-2,2))+2
  // return darkest

   
}

function mapToGrayLevel(grayValue) {
  // 计算正态分布函数值
  let mean = 127.5; // 平均值
  let standardDeviation = 50; // 标准差
  // 计算灰度值对应的正态分布函数值
  let gaussianValue = gaussian(grayValue, mean, standardDeviation);
  // 将正态分布函数值映射到 0 到 1 的范围
  let normalizedValue = map(gaussianValue, 0.0051, 0.0059, 0, 255);
  // 将映射后的值映射到 numLevels 个等级
  let mappedValue = round(map(normalizedValue, 0, 255, 0, numLevels - 1));
  // 返回映射后的灰度等级
  // console.log(mappedValue)
  return mappedValue;
}

function gaussian(x, mean, standardDeviation) {
  let e=exp(-0.5 * pow((x - mean) / standardDeviation, 2)) / (standardDeviation * sqrt(2 * PI));
  console.log(e)
  // return exp(-0.5 * pow((x - mean) / standardDeviation, 2)) / (standardDeviation * sqrt(2 * PI));
  return e

}