const CRYSTAL_SIZE = 500
const SIDES = 6
let PALLETE = []

function setup() {
  createCanvas(530, 530, SVG)

  PALLETE = [
    color(255, 52, 154), // pink
    color(4, 0, 152) // blue
  ]

  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  let layer = new Layer();
  let circle = new Circles();
  circle.render();
  console.log(layer);
  //testLines()
  ////outlineShape()
  //simpleLines()
  //circle();
	/*let picker = random(1);
	if(picker > 0.3){
		outlineShape();
	}

	picker = random(1);
	if(picker > 0.3){
		simpleLines();
	}

	picker = random(1);
	if(picker > 0.3){
		circle();
	}*/
}

function circle() {
	const numShapes = SIDES
	const angle = 360/numShapes
	const shapeSize = (CRYSTAL_SIZE/2) * 0.93
	const position = (CRYSTAL_SIZE/2) - (shapeSize/2)
	const strokeColor = getRandomFromPallete()

	noFill();
	stroke(strokeColor)
	strokeWeight(1)
	push()
		translate(width/2, height/2)
		for(let i = 0; i <= shapeSize; i++){
			ellipse(position,0,shapeSize,shapeSize);
			rotate(angle);
		}
	pop()
}

function simpleLines () {
  const stepsOut = 8
  const numSteps = randomSelectTwo() ? stepsOut : int(stepsOut * 1.25)
  const step = (CRYSTAL_SIZE / 2) / numSteps
  const start = floor(random(0, numSteps))
  const stop = floor(random(start, numSteps + 1))

  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const strokeColor = getRandomFromPallete()
  const weight = randomSelectTwo() ? 1 : 3

  const angle = 360 / numShapes

  noFill()
  stroke(strokeColor)
  strokeWeight(weight)
  push()
    translate(width/2, height/2)
    for (let i = 0; i < numShapes; i++) {
      line(start * step, 0, stop * step, 0)
      rotate(angle)
    }
  pop()
}


function outlineShape () {
  const strokeColor = getRandomFromPallete()
  const weight = randomSelectTwo() ? 1 : 3
  const hexagonTrue = randomSelectTwo()

  stroke(strokeColor)
  strokeWeight(weight)
  push()
  translate(width/2, height/2)
  if (hexagonTrue) {
    hexagon(0, 0, CRYSTAL_SIZE / 2)
  } else {
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
  }
  pop()
}

function testLines () {
  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const strokeColor = getRandomFromPallete();

  noFill()
  stroke(PALLETE [0])
  strokeWeight(1)
  push()
    translate(width/2, height/2)
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    stroke(strokeColor)
    const angle = 360 / numShapes
    for (let i = 0; i < numShapes; i++) {
      line(0, 0, 0, CRYSTAL_SIZE / 2)
      rotate(angle)
    }
  pop()
}
