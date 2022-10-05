// FH_HASH p5 template | by @squintdev
const colorCount = 3; //number of colors in palette
let seed = 0; //seed Hash
let shape;
let PALETTE;

function setup() {
    let size = min(windowWidth, windowHeight);
    let cnv = createCanvas(size, size);
    cnv.id('p5canvas');

    //set angleMode and rectMode here
    angleMode(DEGREES)
    rectMode(CENTER)

    colorMode(HSL);

    noLoop()

    /**
     * MAKE SURE TO PUT ANY CALLS TO RANDOM() OR NOISE() AFTER randomSeed(seed)
     */
    seed=int(fxrand() * 100000000) // FXHASH seed rand
    randomSeed(seed)

    PALETTE = createPalette(colorCount);

    shapePicker = random(1)

    if (shapePicker < 0.1) {
      shape = 'ngon';
    } else if (shapePicker >= 0.1 && shapePicker < 0.5) {
      shape = 'rectangle';
    } else {
      shape = 'circle';
    }

    backgroundColor = random(PALETTE);
    shapeColor = random(PALETTE);

    // fxHash Features
    window.$fxhashFeatures = {
      'shape': shape,
      'background': backgroundColor,
      'shape color': shapeColor,
    };

    console.log($fxhashFeatures)
}

function draw() {
  background(backgroundColor)
  fill(shapeColor)
   
  if (shape === 'rectangle') {
    rect(width/2,height/2,100,100)
  } else if (shape === 'circle') {
    ellipse(width/2,height/2,100,100)
  } else {
    //number of sides for ngon
    sides = floor(random(3,10))
    ngon(width / 2, height / 2, 100, sides)
  }
}

function windowResized() {
  let newSize = min(windowWidth, windowHeight);
  resizeCanvas(newSize, newSize);
}