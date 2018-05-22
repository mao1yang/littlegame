
var mymark = 3;
var start = 0;
var comp = 'url("Google.png")';


// For the change of the pics
var n = 1;
function change() {
    if (n == 1) {
        $('.loading').css("background-image", "url('Google.png')");
        n++;
    }
    else {
        $('.loading').css("background-image", "url('logo.png')");
        n--;
    }
}

function clickOnImage () {
    var mark = $('#mymark');
    if ($('.loading').css("background-image") == comp && start == 1) {
        mymark--;
    }

    mark[0].innerHTML = mymark;
    if (mymark == 0) {
        alert("Game Over");
    }
}

function startClick () {
    start = 1;
    setInterval(change, 1000);
}

// $(document).ready(function () {
    


// });