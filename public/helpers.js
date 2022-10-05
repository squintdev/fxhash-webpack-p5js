//place any helper functions in this file to keep sketch code clean and manageable


// function that randomly returns true or false
const randomBoolean = () => {
  const rando = random(fxrand())
  return rando > .5 ? true : false
}

// function that procedurally generates an HSL color Palette
const createPalette = (colorCount) => {
  var PALETTE = [];
  for (i = 0; i < colorCount; i++) {
    newColor = color(random(360), random(100), random(100));
    PALETTE.push(newColor);
  }

  return PALETTE;
}


// function that creates an ngon
const ngon = (posX, posY, radius, sides) => {                     
  const rotAngle = 360 / sides
  beginShape()
    for (let i = 0; i < sides; i++) {
      const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
      vertex(thisVertex.x, thisVertex.y)
    }
  endShape(CLOSE)
}

// function that locates points on a circle
const pointOnCircle = (posX, posY, radius, angle) => {         
  const x = posX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
}