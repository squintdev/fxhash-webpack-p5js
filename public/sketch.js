// FH_HASH p5 template | @squintdev

let seed = 0; //seed Hash
let bgColor = 0;
let sqColor = 0;

function setup() {
    createCanvas(500, 500)
    noLoop()

    seed=int(fxrand() * 100000000) // FXHASH seed rand
    randomSeed(seed)

    bgColor = random(255)
    sqColor = random(255)

    // fxHash Features
    window.$fxhashFeatures = {
      'background': bgColor,
      'square color': sqColor,
    };
}

function draw() {
   background(bgColor)
   fill(sqColor)
   rect(0,0,25,25)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}