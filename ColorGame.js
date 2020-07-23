var colors= generateRandomColors(6);
var numSquare=6;

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquare=3;
    colors= generateRandomColors(numSquare);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;

    for(var i=0 ;i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else squares[i].style.display="none";
    }
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquare=6;
    colors= generateRandomColors(numSquare);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;

    for(var i=0 ;i<squares.length; i++){
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
    }
});

resetButton.addEventListener("click",function(){
    //change color of h1 to default
    h1.style.backgroundColor="steelblue";
    //change colors
    colors= generateRandomColors(numSquare);
    // change picked colors
    pickedColor=pickColor();
    //change color display
    colorDisplay.textContent=pickedColor;
    //reset message display
    messageDisplay.textContent="";
    this.textContent="New Color";
    //change colors of sqaure
    for(var i=0; i<squares.length; i++){
        // add new color
        squares[i].style.backgroundColor=colors[i];
    }
})

colorDisplay.textContent=pickedColor;

for(var i=0; i<squares.length; i++){
    // add initial color
    squares[i].style.backgroundColor=colors[i];
    //add event listener
    squares[i].addEventListener("click",function(){
        //clicked color
        var clickedColor=this.style.backgroundColor;
        //comapare colors
        if(clickedColor===pickedColor){
            messageDisplay.textContent="Correct!";
            changeColor(pickedColor);
            h1.style.backgroundColor=clickedColor;
            resetButton.textContent="Play Again?";
        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again?";
        }
    });
}

//change all the colors when guess is right
function changeColor(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor=color;
    }
}

//Pick random color
function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

//Generate random array of colors
function generateRandomColors(num){
    //make an empty array
    var arr=[];
    for(var i=0; i<num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick a red from 0-255
    var r= Math.floor(Math.random()*256);
    //pick green
    var g= Math.floor(Math.random()*256);
    //pick blue
    var b= Math.floor(Math.random()*256);

    return "rgb("+ r + ", " + g + ", "+ b + ")";
}