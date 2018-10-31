document.addEventListener('contextmenu', event => event.preventDefault());
//HTML elements
//GENERAL HTML ELEMENTS
//menu div, practice div, and meetShapes div
var menuDiv = document.getElementById("Menu")
var practiceDiv = document.getElementById("PracticeSkills")
var meetshapesDiv = document.getElementById("MeetTheShapes")

//HTML ELEMENTS FOR MENU
//area where mouseover is detected
var circleHover = document.getElementById("CircleHover")
var squareHover = document.getElementById("SquareHover")
var hexHover = document.getElementById("HexagonHover")

//speech bubble in menu
var chatCircle = document.getElementById("ChatCircle")
var chatSquare = document.getElementById("ChatSquare")
var chatHex = document.getElementById("ChatHex")

//highlighted outline in menu
var outlineCircle = document.getElementById("circleOutline")
var outlineSquare = document.getElementById("squareOutline")
var outlineHex = document.getElementById("hexagonOutline")

//menu buttons
var practiceButton = document.getElementById("Practice")
var meetShapesButton = document.getElementById("MeetShapes")

function menuEventListeners () {
	//circle speech bubble and highlight outline
	hoverEvent(circleHover,
	function(){chatCircle.style.opacity = 1;outlineCircle.style.opacity = 1},
	function(){chatCircle.style.opacity = 0;outlineCircle.style.opacity = 0})
	//square
	hoverEvent(squareHover,
	function(){chatSquare.style.opacity = 1;outlineSquare.style.opacity = 1},
	function(){chatSquare.style.opacity = 0;outlineSquare.style.opacity = 0})
	//hexagon
	hoverEvent(hexHover,
	function(){chatHex.style.opacity = 1;outlineHex.style.opacity = 1},
	function(){chatHex.style.opacity = 0;outlineHex.style.opacity = 0})
	
	//click events for menu buttons
	practiceButton.addEventListener("click",function(){
		screenSlide(menuDiv,practiceDiv,"left")
	})
	meetShapesButton.addEventListener("click",function(){
		screenSlide(menuDiv,meetshapesDiv,"right")
	})
}

function screenSlide (div1,div2,direction) {
	if (direction == "left") {
		div1.style.left = "-100vw"
		div2.style.left = "0vw"
	}else if (direction == "right") {
		div1.style.left = "100vw"
		div2.style.left = "0vw"
	}else if (direction == "up") {
		div1.style.top = "-100vh"
		div2.style.top = "0vh"
	}else if (direction == "down") {
		div1.style.top = "100vh"
		div2.style.top = "0vh"
	}
}

function hoverEvent (element, mouseinFunc, mouseoutFunc) {
	element.addEventListener("mouseover", mouseinFunc)
	element.addEventListener("mouseout", mouseoutFunc)
}

//Insert debug statements that you want to run constantly
function infoLog () {
	
}

menuEventListeners()
infoLogInterval = setInterval(infoLog,1000)