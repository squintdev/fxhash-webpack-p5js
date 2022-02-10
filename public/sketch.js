// FH_HASH p5 template | @squintdev

let seed = 0; //seed Hash
let PALETTE = []
let shape;

function setup() {
    createCanvas(500, 500)
    
    //customize colors in this palette array...can be any number of colors
    PALETTE = [
      color(16,215,222),
      color(52,62,61)
    ]

    noLoop()

    seed=int(fxrand() * 100000000) // FXHASH seed rand
    randomSeed(seed)

    shape = randomBoolean() ? 'rectangle' : 'circle'
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
   
  if(shape === 'rectangle') {
    rect(width/2,height/2,100,100)
  } else {
    ellipse(width/2,height/2,100,100)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}