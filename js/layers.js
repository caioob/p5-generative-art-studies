class Layer {
  constructor(){
    this.sides = SIDES
    this.numShapes = this.sides
    this.angle = 360 / this.numShapes
    this.stepsOut = 8
    this.singleStep = (CRYSTAL_SIZE/2) / this.stepsOut
    this.thinStroke = 1
    this.thickStroke = 3
    this.strokeColor = getRandomFromPallete()
    this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
  }
}

class Circles extends Layer {
  constructor() {
    super() //gets imported data from extended class
    this.shapeSize = (CRYSTAL_SIZE / 2 ) * 0.93
    this.position =  (CRYSTAL_SIZE / 2 ) - (this.shapeSize / 2)
    this.shapeSize2 = randomToSize()
  }

  render(){
	  noFill();
	  stroke(this.strokeColor)
	  strokeWeight(1)
	  push()
		  translate(width/2, height/2)
      console.log(this.shapeSize);
		  for(let i = 0; i <= this.shapeSize; i++){
			  ellipse(this.position, 0, this.shapeSize, this.shapeSize)
			  rotate(this.angle)
		  }
	  pop()
  }

  renderSingle() {
    noFill();
    stroke(this.strokeColor);
    strokeWeight(1);
    push()
      translate(width/2, height/2);
      ellipse(0,0,CRYSTAL_SIZE,CRYSTAL_SIZE);
    pop()
  }

  renderSmall() {
    noFill()
    stroke(this.strokeColor)
    push()
      translate(width/2, height/2)
      ellipse(0, 0,this.shapeSize2,this.shapeSize2)
    pop()
  }
}

class SimpleLines extends Layer {
  constructor() {
    super()
    this.numSteps = randomSelectTwo() ? this.stepsOut : int(this.stepsOut * 1.25)
    this.step = (CRYSTAL_SIZE / 2) / this.numSteps
    this.start = floor(random(0, this.numSteps))
    this.stop = floor(random(this.start, this.numSteps + 1))
  }

  render() {
    noFill()
    stroke(this.strokeColor)
    strokeWeight(this.weight)
    push()
      translate(width/2, height/2)
      for (let i = 0; i < this.numShapes; i++) {
        line(this.start * this.step, 0, this.stop * this.step, 0)
        rotate(this.angle)
      }
    pop()
  }
}

class OutlineShape extends Layer {
  constructor(){
    super()
    this.hexagonTrue = randomSelectTwo()
  }

  render() {
    stroke(this.strokeColor)
    strokeWeight(this.weight)
    push()
      translate(width/2, height/2)
      if (this.hexagonTrue) {
        hexagon(0, 0, CRYSTAL_SIZE / 2)
      }
      else {
        ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
      }
    pop()
  }
}

class Hexagons extends Layer {
  constructor() {
      super()
      this.strokeColor = getRandomFromPallete()
      this.hexSize = random(CRYSTAL_SIZE)
  }

  render() {
	  noFill();
	  stroke(this.strokeColor);
	  strokeWeight(this.weight);
	  push();
		  translate(width/2, height/2);
		  hexagon(0,0, this.hexSize);
	  pop();
  }
}
