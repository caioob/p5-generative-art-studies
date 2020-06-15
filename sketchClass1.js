
function setup(){
	createCanvas(500,500, SVG);//Creating a 500 X 500 px canvas that renders in SVG. SVG renderer available from p5.svg.js
	angleMode(DEGREES); //changes angles from radians to degrees
	rectMode(CENTER);//sets the mode the rectangle is drawn. CENTER=0,0 means the center of the rect, CORNER=0,0 means the corner of the rect
}
function draw(){
	background('red');//defining background color
	fill(0);//defines next available object fill color, i assume
	push(); //push/pop creates a new scope for canvas manipulation. everything done inside push()...pop() is only valid within push()...pop()
		translate(width/2, height/2); //changes the graph axis from the first pixel of the screen to the middle of the screen. now 0,0 is the middle rather than the top. Top is now -250, -250
		rotate(45);
		rect(-12.5, -12.5, 25, 25);//creates rectangle at 0 0 a 25x25 rectangle
	pop();
	fill('green');
	rect(0, 0, 25, 25);//creates rectangle at 0 0 a 25x25 rectangle
}
