var numSquare = 6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

// for loop, looping through mode buttons
for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
        
        reset();
    });
}

// easyBtn.addEventListener("click", function() {
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquare = 3;
//     colors = generateRandomColors(numSquare);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++) {
//         if(colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }

// });

// hardBtn.addEventListener("click", function() {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquare = 6;
//     colors = generateRandomColors(numSquare);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
    
//     }
// });

resetButton.addEventListener("click", function() {
    // //generate all new colors
    // colors = generateRandomColors(numSquare);
    // //pick new random colors from the array
    // pickedColor = pickColor();
    // //change color display to match picked color
    // colorDisplay.textContent = pickedColor;
    // //Reser text button
    // resetButton.textContent = "New Colors"
    // messageDisplay.textContent = "";
    // resetButton.textContent = "New Colors"
    // //change colors of squares
    // for(var i = 0; i < squares.length; i++) {
    //     squares[i].style.backgroundColor = colors[i];
    // }
    // //Reset h1 background
    // h1.style.backgroundColor = "steelblue";
    reset();
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    //Initialize colors to squares
    squares[i].style.backgroundColor = colors[i];
    
    //Add click listerners to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?"
            changeColor(clickedColor);
            h1.style.background = pickedColor;
            
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}

function changeColor(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }    
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquare);
    //pick new random colors from the array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //Reser text button
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } 
        else {
            squares[i].style.display = "none";
        }
    }
    //Reset h1 background
    h1.style.backgroundColor = "steelblue";
}