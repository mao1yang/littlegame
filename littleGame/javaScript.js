var abtn = $('.loading');
var mymark = 3;
var start =0;
var mark = $('#mymark');
var comp = 'url("https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Chrome_Material_Icon-450x450.png")';
abtn.click(function(){
  
  if (abtn.css("background-image") == comp && start == 1) {
      mymark--;
    }

  mark[0].innerHTML = mymark;
     if (mymark == 0) {
    alert("Game Over");
    }
});

// For the change of the pics
var n=1;
function change(){   
  if(n==1){
  $('.loading').css("background-image","url('https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Chrome_Material_Icon-450x450.png')");
  n++;
  }
    else{
   $('.loading').css("background-image","url('http://www.hi-mike.com/img/logo.png')");
    n--;
    }  
}
$('#start').click(function(){
  start=1;
  setInterval(change, 1000);
})