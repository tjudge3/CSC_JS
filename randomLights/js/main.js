let intPattern=Math.floor(Math.random() * 100)+1;
let container=document.getElementById("divContainer");

for (var x = 1;x < intPattern; ++x){
    let newPattern = document.createElement("SPAN");
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    newPattern.className = "pattern";

    newPattern.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

    container.appendChild(newPattern);
}