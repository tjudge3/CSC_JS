let weekDays=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let emojis=[
        ['happy.png','Good Day'],['sad.png', 'Things Suck'],['crazy.png', 'Wow. What a day'],['chill.png','Pretty relaxed']
        ];
  //I changed below from getElementById to query selector since that's what the lessons have been using. 
let container=document.querySelector('#divContainer');
let randomEmoji=0;
let imgEmoji;
let pEmoji;

//I may be incorrect here, and if I am, I hope you don't giet rid of too many points from me. But the video had 
// for (var i=0;i<=weekDays.length -1;i++) but rather than do the -1, I think you can just drop the "=" in i<=weekDays. 
//So it's just i<weekDays. 6 is still less than 7, so the loop is true, but it stops and stops the loop because it hits 7 and 7 is not less than 7. 
//In that case, 7 would be equal to 7, I hope that makes sense, it does in my head at least. 
for (var i=0;i<weekDays.length;i++){
    randomEmoji=Math.floor(Math.random()*emojis.length);
    imgEmoji='<img src="images/' + emojis[randomEmoji][0] + '" onclick="happyDay(this)"/>';
    pEmoji='<p>' + emojis[randomEmoji][1] + "</p>"

    if (emojis[randomEmoji][0]==='sad.png'){
        container.innerHTML +='<span class="color-bad">' + weekDays[i] + imgEmoji + pEmoji + '</span>'; //originally I put the onclick here,  
    }                                                     //it took me longer than I'd like to admit to put it in imgEmoji                  
    else{
        container.innerHTML +='<span>' + weekDays[i] + imgEmoji + pEmoji + '</span>';
    } 
    
}


function happyDay(image){
    image.src ="images/happy.png";
}

/*I created a toggle so the images would go back and forth, but I removed it because I felt it might be too far outside the scope of the extra credit
And since I already changed i<weekDays, I didn't want to lose too many points. */