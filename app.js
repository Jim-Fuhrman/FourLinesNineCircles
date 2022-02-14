/*
this link shows code that draws a diagonal line from a to b.
  https://jsfiddle.net/au6opnb0/ 
keep in mind the pythagorean theorem for computing the length of the line.
*/

const bottomRightCircle = document.getElementById("bottomRightCircle");
const topLeftCircle = document.getElementById("topLeftCircle");
const bottomLeftCircle = document.getElementById("bottomLeftCircle");
const topRightCircle = document.getElementById("topRightCircle");

function getOffset(el) {
	// console.log(el);
	let element = el.getBoundingClientRect();
	// console.log(element);
	return {
		left: element.left + window.pageXOffset,
		top:  element.top  + window.pageYOffset,
		width: element.width || el.offsetWidth,
		height: element.height || el.offsetHeight
	};
}

function drawLine(fromHere, toThere, color, thickness) {

	//bottom right
	let x1 = fromHere.left + fromHere.width / 2;
	// console.log(`x1: ${x1}`)
	let y1 = fromHere.top + fromHere.height / 2;
	// console.log(`y1: ${y1}`)

	//top left
	let x2 = toThere.left + toThere.width / 2;
	// console.log(`x2: ${x2}`)
	let y2 = toThere.top + toThere.width / 2;
	// console.log(`y2: ${y2}`)

	//distance
	let length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
	// console.log(`length: ${length}`);
	// center
  let cx = ((x1 + x2) / 2) - (length / 2);
  let cy = ((y1 + y2) / 2) - (thickness / 2);
  // angle
	let angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI);
	// console.log(`angle: ${angle}`)
	//make hr
	let htmlLine = "<div style='padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);' />";
    //
    // alert(htmlLine);
    document.body.innerHTML += htmlLine;
}

// const done = () => {
// 	// clearInterval(intervalBetween);
// 	console.log("done");
// }

const bottomRightCircleCoords = getOffset(bottomRightCircle);
const topLeftCircleCoords = getOffset(topLeftCircle);
const bottomLeftCircleCoords = getOffset(bottomLeftCircle);
const topRightCircleCoords = getOffset(topRightCircle);

function drawLine1() {
	return drawLine(bottomRightCircleCoords, topLeftCircleCoords, "maroon", 3); 
}

function drawLine2() {
	return drawLine(topLeftCircleCoords, bottomLeftCircleCoords, "maroon", 3); 
}

function drawLine3() {
	return drawLine(bottomLeftCircleCoords, topRightCircleCoords, "maroon", 3); 
}

function drawLine4() {
	return drawLine(topRightCircleCoords, topLeftCircleCoords, "maroon", 3); 
}

const btns = document.querySelectorAll(".btn");
console.log(btns);

// Either the for-of or the forEach will work. 

// for(let btn of btns) {
// 	btn.addEventListener('click', answer);
// }

btns.forEach(function (btn, _idx, _arr) {
	btn.addEventListener('click', answer);
});

function answer() {
	const ourYesResp = "You're right. After clicking \"ok\", you'll see how.";
	const ourNoResp = "But they can indeed. After clicking \"ok\", you'll see how.";
	const userClicked = this.textContent;
	userClicked === "Yes" ? alert(ourYesResp) : alert(ourNoResp); 

	drawLines();
}

function drawLines() {
	setTimeout(drawLine1, 1000);
	setTimeout(drawLine2, 2000);
	setTimeout(drawLine3, 3000);
	setTimeout(drawLine4, 4000);
}







// const yes = btnYes.addEventListener('click', msgYes);
// const no = btnNo.addEventListener('click', msgNo);

// function msgYes() {
// 	alert("You're right. After clicking \"ok\", you'll see how.")
// 	drawLines();
// }

// function msgNo() {
// 	alert("Oh yes they can. After clicking \"ok\", you'll see how.")
// 	drawLines();
// }
