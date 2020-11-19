// Stijn Dusseldorp
// Software Developer

var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");

var button1Amnt = 1;
var button2Amnt = 1;
var button3Amnt = 1;

function change(id){
    switch(id){
        case 1 : 
            document.getElementById("img").src = "images/1.jpg";
            document.getElementById("container").style.backgroundImage = "url(images/bg1.jpg)";   
            document.getElementById("1").innerHTML = button1Amnt++;       
            break;
        case 2 :
            document.getElementById("img").src = "images/2.jpg" 
            document.getElementById("container").style.backgroundImage = "url(images/bg2.jpg)";
            document.getElementById("2").innerHTML = button2Amnt++;   
            break;
        case 3 :
            document.getElementById("img").src = "images/3.jpg"  
            document.getElementById("container").style.backgroundImage = "url(images/bg3.jpg)";
            document.getElementById("3").innerHTML = button3Amnt++;   
            break;
        default:
            break;
    }
}
