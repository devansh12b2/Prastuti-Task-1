var numSquares = 6;
var colors = generateRandomColors(numSquares);
var square = document.querySelectorAll(".opt-btn");
var pickedColor = pickColor();
var rgbCode = document.getElementById("rgbCode");
var optns = document.querySelector(".options");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector(".reset");
modeSelect();
function modeSelect() {
    var mode = "easy";
    mode = document.getElementById("mode").value;

    console.log(mode);
    console.log(typeof (mode));
    if (mode === "easy") {
        easymode();
    }
    if(mode === "hard" ) {
        hardmode();
    }
}

function easymode(){
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  for(var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.background = colors[i];
    } else {
      square[i].style.display = "none";
    }
  }
}

function sizekm(x) {
    if(x.matches)
        optns.style.gridTemplateRows = "100px 100px 100px 100px 100px 100px";
    else
        optns.style.gridTemplateRows = "200px 200px";
}
function hardmode(){

  numSquares = 6;
  colors = generateRandomColors(numSquares);
    pickedColor = pickColor();


    var x = window.matchMedia("(max-width: 700px)");

    sizekm(x);
    x.addListener(sizekm);


  rgbCode.textContent = pickedColor;
  for(var i = 0; i < square.length; i++) {
      square[i].style.background = colors[i];
      square[i].style.display = "flex";
  }
}

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from the array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  rgbCode.textContent = pickedColor;
  this.textContent = "New Color";
  //change colors of squares
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = colors[i];
  }
  h1.style.background = "whitesmoke";
})

rgbCode.textContent = pickedColor;

for(var i = 0; i < square.length; i++) {
  //add initial colors to squares
  square[i].style.background = colors[i];
  //add click listeners to squares
  square[i].addEventListener("click", function() {
    //grab color of picked square

    var clickedColor = this.style.background;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
        alert("GOOD JOB!!!!!🎆🎆🎆🎆🎆🎆🎇🎉🎉🎉🎉🎉🎉🎉🎉🎉");
      resetButton.textContent = "New Game";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    }else{
      this.style.background = "#232323";
        alert("Katgya tumhara dubara kosis kro 🫂");
    }
  })
}

function changeColors(color){
  //loop through all squares
for (var i = 0; i < square.length; i++) {
    //change each color to match given color
    square[i].style.background = color;
}

}

function pickColor(){
var random = Math.floor(Math.random() * colors.length)
return colors[random];
}

function generateRandomColors(num){
  //make and array
  var arr = []
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
    //get random color and push into array
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0-255
var r = Math.floor(Math.random() * 256)
  //pick a "green" from 0-255
var g = Math.floor(Math.random() * 256)
  //pick a "blue" from 0-255
var b = Math.floor(Math.random() * 256)

return "rgb(" + r +", " + g + ", " + b +")";
}
