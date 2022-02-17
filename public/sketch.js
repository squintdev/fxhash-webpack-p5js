// FH_HASH p5 template | @squintdev

let seed = 0; //seed Hash
let PALETTE = []
let shape;

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight)
    cnv.id('p5canvas')

    //set angleMode and rectMode here
    angleMode(DEGREES)
    rectMode(CENTER)
    
    //customize colors in this palette array...can be any number of colors
    PALETTE = [
      color(16,215,222),
      color(52,62,61)
    ]

    noLoop()

    /**
     * MAKE SURE TO PUT ANY CALLS TO RANDOM() OR NOISE() AFTER randomSeed(seed)
     */
    seed=int(fxrand() * 100000000) // FXHASH seed rand
    randomSeed(seed)

    shapePicker = random(1)

    if (shapePicker < 0.1) {
      shape = 'hexagon';
    } else if (shapePicker >= 0.1 && shapePicker < 0.5) {
      shape = 'rectangle';
    } else {
      shape = 'circle';
    }

    backgroundColor = getRandomFromPalette()
    shapeColor = getRandomFromPalette()

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
    hexagon(width / 2, height / 2, 100,100)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}