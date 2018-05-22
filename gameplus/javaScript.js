var life=3;
var score=0;

console.log(0);

function clickOnImage(){
    var scoreNow=$('.score');
    var lifeNow=$('.life');
    var colorRed="rgb(255, 0, 0)";
    var colorBlue="rgb(0, 0, 255)";
    //click red reduce life by 1 point  
    if($('.spot').css("background-color")== colorRed){
        life--;
    }
    //click blue add score by 1 point
    if($('.spot').css("background-color")== colorBlue){
        score++;
    }
    if(life==0){
        //clearInterval(interId1);
        alert("Game Over");
        $('.spot').hide();
    }
    scoreNow[0].innerHTML=score; // Is there another way to change attribute of elements?
    lifeNow[0].innerHTML=life;
}

function showSpot(){
    var x=Math.random()*1400; //for the label of x
    var y=Math.random()*530; //for the label of y
    var color=['red','blue'];
    var colorSelect=color[Math.floor(Math.random()*color.length)];
    //var spotPosition=$('.spot');
    $('.spot').css("left",x);
    $('.spot').css("top",y);
    $('.spot').css("background-color",colorSelect);
}

function startClick(){
    $('.spot').show();
    setInterval(showSpot,1000);
}
window.onload=function(){
    $('.spot').hide();
}