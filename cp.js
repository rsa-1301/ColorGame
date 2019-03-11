var numberOfSquares = 6

var colors = generateRandomColors(numberOfSquares);

var h1 = document.querySelector("h1");
var square = document.querySelectorAll(".square"); 

var pickedcolor= pickcolor();
var colordisplay= document.getElementById("colordisplay");

var message = document.getElementById("message");
var resetButton = document.getElementById("reset");
colordisplay.textContent= pickedcolor;

var modeButtons = document.querySelectorAll(".mode");

 


for(var i=0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "Easy")
            {
                numberOfSquares=3;
            }
        else{
            numberOfSquares =6;
        }
        reset();
        
        
        
    });
}

function reset(){
    resetButton.textContent="New Game";
    colors = generateRandomColors(numberOfSquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for(var i=0; i<square.length;i++){
        if(colors[i]){
        square[i].style.display="block";
        square[i].style.backgroundColor=colors[i];
        }
        else{
            square[i].style.display="none";
        }
    }
    message.textContent="";
    
    h1.style.backgroundColor="blue";
}


resetButton.addEventListener("click",function(){
    reset();
    
});


for(var i=0; i<square.length; i++){
   square[i].style.backgroundColor=colors[i];
    square[i].addEventListener("click",function(){
        
       var clickedcolor = this.style.backgroundColor;
        if(clickedcolor===pickedcolor){
            message.textContent="Correct";
            changecolors(clickedcolor);
            h1.style.backgroundColor=clickedcolor;
            resetButton.textContent="Play Again?";
                  
        }
        else
        {
            this.style.backgroundColor="#232323";
            message.textContent="Try Again";
        }
    });
    
}
    
    
    


function changecolors(c){
    for(var i=0; i<colors.length;i++){
        square[i].style.backgroundColor = c;
    }
}


function pickcolor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num){
    var arr = []
    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}