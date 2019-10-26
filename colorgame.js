var numSquare = 9;
var colors = buildRandomColor("numSquare")

var squares = document.querySelectorAll(".color");
var pickedColor = pickColor();
var theHead =document.querySelector("#header")
var messageDisplay = document.querySelector("#messageDisplay");
var colorDisplay = document.getElementById("colorDisplay");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
// var extHardBtn = ducument.querySelector("#extHardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	// extHardBtn.classList.remove("selected");
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	// extHardBtn.classList.remove("selected");
});
// extHardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.remove("selected");
// 	// extHardBtn.classList.add("selected");
// });

reset.addEventListener("click", function(){
	// build Random color
	colors = buildRandomColor(numSquare);
	// pick New colors
	pickedColor = pickColor();
	// to march picked color
	colorDisplay.textContent = pickedColor;
	// Change the colors ofthe squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = colors[i];
	}
	theHead.style.backgroundColor = "#595959";
}
)

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			reset.textContent = "Play Again!"
			changeColors(clickedColor);
			theHead.style.backgroundColor = clickedColor;
		} else {

			// // build Random color
			// 	// colors = buildRandomColor(numSquare);
			// // pick New colors
			// 	// pickedColor = pickColor();
			// // to march picked color
			// 	// colorDisplay.textContent = pickedColor;
			// // Change the colors ofthe squares
			// for(var i = 0; i < squares.length; i++) {
			// 	//change each color to match given color
			// 	squares[i].style.background = colors[i];
			// }
			// theHead.style.background = "#595959";
			// // this.style.background = "#232322";
			// messageDisplay.textContent = "Try Again";
			// this.buildRandomColor(numSquare);


			this.style.backgroundColor = "#ccffff";
			messageDisplay.textContent = "Wrong!";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function buildRandomColor(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}