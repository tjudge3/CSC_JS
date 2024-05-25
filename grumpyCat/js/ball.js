let blnStart=false;
let id;
document.querySelector("#imgGo").onclick=startCrazyBall;
document.querySelector("#imgGo").style.cursor="pointer";

let ballXY=[
    top="", left="", preTop="", preLeft=""
]

function startCrazyBall(){
    if (blnStart===true){
        clearInterval(id);
        blnStart=false;
    }
    else{
        blnStart=true;
        ballXY.preTop="0px";
        ballXY.preLeft="0px";
        id=setInterval(moveBall, 900);
    }
}

function moveBall(){
    let ball=document.querySelector("#crazyBall");

    ballXY.top=Math.floor(Math.random()*(window.innerHeight -200)+1) + "px";
    ballXY.left=Math.floor(Math.random()*window.innerWidth +1) + "px";

    ball.animate([
        {
            transform: 'translate('+ballXY.preLeft+ ',' + ballXY.preTop + ') rotate(360deg)'
        },
        {
            transform: 'translate('+ballXY.left+ ',' + ballXY.top + ') rotate(0deg)'
        }
    ],
    {
        duration: 900
    });

    ballXY.preTop=ballXY.top;
    ballXY.preLeft=ballXY.left;
}


//This combines everything from below that was asked for in the assignment into one function. 

let clickCount = 0; // Tracking number of clicks

function meowClick() {
    clickCount++;
    console.log("Click count:", clickCount);

    let ball = document.querySelector("#crazyBall");
    let audio = document.querySelector("#backgroundAudio");

    if (clickCount % 2 === 0) {
        ball.classList.add("blueGradient");
        console.log("Color changed to blue - Ball stopped - Audio paused"); // debugging
        audio.pause();
    } else {
        ball.classList.remove("blueGradient");
        console.log("Color original - Ball moving - Audio playing"); //debugging
        audio.play();
    }
}

document.querySelector("#imgGo").addEventListener("click", meowClick);





//It may have been my browser or something locally, but for the life of me I could not figure out why the "onclick" wasn't working.
//Even after changing to an eventlistener I was still having problems, so the one way I could get to work was an if/else. 
//The clickCount was necessary to make that work and the console.log is/was all for debugging. 

//Below is the code that got me to the final code. 

// Didn't like the way this looked, so figured combing the two made more sense. 
//document.querySelector("#imgGo").addEventListener("click", changeColor);
//document.querySelector("#imgGo").addEventListener("click", toggleAudio);

// I think if I can combine the two functions into one, I can actually just make this simplier
/*document.querySelector("#imgGo").addEventListener("click", function() {
    changeColor();
    toggleAudio();
});*/

/*function changeColor() {
    clickCount++; // click count loop
    console.log("Click count:", clickCount); // count display for debugging

    let ball = document.querySelector("#crazyBall"); 

    if (clickCount % 2 === 0) { // coming from java to javascript, the =, ==, === still throws me off
        // Even clicks, change color to blue - Stop ball (originial position) - play the audio
        ball.classList.add("blueGradient");
        console.log("Color changed to blue - Ball stopped - Audio paused");
    } else {
        // Odd clicks, original color (revent) - Ball on the move - pause audio
        ball.classList.remove("blueGradient");
        console.log("Color original - Ball moving - Audio playing");
    }
}*/


// The assignment didn't ask for a toggle, but it kind of just made sense based off of the color toggle. 
// This is the original, but it just makes sense to combine the two since they both work in tandem
/*function toggleAudio() { 
    let audio = document.querySelector("#backgroundAudio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}*/




