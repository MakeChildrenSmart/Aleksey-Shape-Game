document.addEventListener('contextmenu', event => event.preventDefault());
//HTML elements
var circleHover = document.getElementById("CircleHover")
var squareHover = document.getElementById("SquareHover")
var hexHover = document.getElementById("HexagonHover")

var chatCircle = document.getElementById("ChatCircle")
var chatSquare = document.getElementById("ChatSquare")
var chatHex = document.getElementById("ChatHex")

function menuEventListeners () {
	//circle speech bubble
	circleHover.addEventListener("mouseover",function() {
		chatCircle.style.opacity = 1
	})
	circleHover.addEventListener("mouseout",function() {
		chatCircle.style.opacity = 0
	})
	
	//square
	squareHover.addEventListener("mouseover",function() {
		chatSquare.style.opacity = 1
	})
	squareHover.addEventListener("mouseout",function() {
		chatSquare.style.opacity = 0
	})
	
	//hexagon
	hexHover.addEventListener("mouseover",function() {
		chatHex.style.opacity = 1
	})
	hexHover.addEventListener("mouseout",function() {
		chatHex.style.opacity = 0
	})
}

menuEventListeners()