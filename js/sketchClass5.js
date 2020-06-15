const CRYSTAL_SIZE = 500;
const RANDOM_LIMIT = 3;
const SIDES = 6;
let PALLETE = [];

function setup(){
	createCanvas(530, 530,SVG);

	PALLETE = [
		color(17, 138, 101),
		color(186, 17, 214),
		color(214, 163, 26),
		color(138, 103, 10),
		color(4, 214, 150)
	]

	noLoop();
	angleMode(DEGREES);
	rectMode(CENTER);
}

function draw(){
	const outTimes = floor(random(0, RANDOM_LIMIT));
	const circleTimes = floor(random(0, RANDOM_LIMIT));
	const rectTimes = floor(random(0, RANDOM_LIMIT));

	for(let i = 0; i < outTimes; i++){
		outlineShape(getRandomFromPallete());
	}

	simpleLines();

	for(let i = 0; i < circleTimes; i++){
		littleCircle(getRandomFromPallete());
	}

	for(let i = 0; i < rectTimes; i++){
		littleRectangle(getRandomFromPallete());
	}
}

function simpleLines(){
	const stepsOut = 8;
	const numSteps = randomSelectTwo() ? stepsOut : int(stepsOut * 1.25);
	const step = (CRYSTAL_SIZE / 2) / numSteps; //radius divided by numsteps
	const start = floor(random(0, numSteps));
	const stop = floor(random(start, numSteps + 1));

	const rando = random(1); const numShapes = randomSelectTwo() ? SIDES : SIDES * 2;
	const strokeColor = getRandomFromPallete();
	const weight = randomSelectTwo() ? 1 : 3;

	const angle = 360 / numShapes;

	noFill();
	stroke(strokeColor);
	strokeWeight(weight);
	push();
		translate(width/2, height/2);

		stroke(strokeColor)
		for (let i = 0; i < numShapes; i++){
			line(start * step, 0, stop * step, 0)
			rotate(angle);
		}
	pop();
}

function outlineShape(color) {
	const strokeColor = color
	const weight = randomSelectTwo() ? 1 : 3;
	const hexagonTrue =  randomSelectTwo();

	stroke(strokeColor);
	strokeWeight(weight);

	push();
		translate(width/2, height/2);
		if(hexagonTrue){
			hexagon(0,0, CRYSTAL_SIZE / 2);
		}
		else{
			ellipse(0,0,CRYSTAL_SIZE,CRYSTAL_SIZE);
		}
	pop();
}

function testLines(){
	strokeWeight(3);
	const rando = random(1);
	let numShapes = randomSelectTwo() ? SIDES : SIDES * 2;

	const strokeColor = getRandomFromPallete();

	noFill();
	stroke(PALLETE[0]);
	push();
		translate(width/2, height/2);
		ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);

		stroke(strokeColor)
		const angle = 360 / numShapes;
		for (let i = 0; i < numShapes; i++){
			line(0,0,0,CRYSTAL_SIZE/2)
			rotate(angle);
		}
	pop();
}
