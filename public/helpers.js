//place any helper functions in this file to keep sketch code clean and manageable

// function that randomly returns true or false
const randomBoolean = () => {
  const rando = random(fxrand())
  return rando > .5 ? true : false
}

//gets a random color from palette array
const getRandomFromPalette = () => {
  const rando = floor(random(0, PALETTE.length))
  return PALETTE[rando]
}

//creates an ngon
const ngon = (posX, posY, radius, sides) => {                     
  const rotAngle = 360 / sides
  beginShape()
    for (let i = 0; i < sides; i++) {
      const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
      vertex(thisVertex.x, thisVertex.y)
    }
  endShape(CLOSE)
}

const pointOnCircle = (posX, posY, radius, angle) => {         
  const x = posX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
}