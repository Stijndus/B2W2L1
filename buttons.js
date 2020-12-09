// Stijn Dusselrp
// Software Developer

var button1Amnt = 1;
var button2Amnt = 1;
var button3Amnt = 1;

function change(id){
    switch(id){
        case 1 : 
            document.getElementById("img").src = "images/1.jpg";
            document.getElementById("container").style.backgroundImage = "url(images/bg1.jpg)";   
            document.getElementById("1").innerHTML = button1Amnt++;      
            color(id);
            disable(id);            
            break;
        case 2 :
            document.getElementById("img").src = "images/2.jpg" 
            document.getElementById("container").style.backgroundImage = "url(images/bg2.jpg)";
            document.getElementById("2").innerHTML = button2Amnt++;  
            color(id); 
            disable(id);
            break;
        case 3 :
            document.getElementById("img").src = "images/3.jpg"  
            document.getElementById("container").style.backgroundImage = "url(images/bg3.jpg)";
            document.getElementById("3").innerHTML = button3Amnt++;  
            color(id); 
            disable(id);
            break;
        default:
            break;
    }
}
 
//  Week 4 Lab 1
function disable(id){
     switch(id){
         case 1:
            document.getElementById("1").disabled = true ;
            document.getElementById("2").disabled = false ;
            document.getElementById("3").disabled = false ;
             break;
         case 2:
            document.getElementById("1").disabled = false ;
            document.getElementById("2").disabled = true ;
            document.getElementById("3").disabled = false ;
             break;
         case 3:
            document.getElementById("1").disabled = false ;
            document.getElementById("2").disabled = false ;
            document.getElementById("3").disabled = true ;
             break;
         default:
             break;
     }

}

function color(id){
    switch(id){
        case 1:
           document.getElementById("1").style.backgroundColor = "red";
           document.getElementById("2").style.backgroundColor = "rgb(101, 255, 101)";
           document.getElementById("3").style.backgroundColor = "rgb(101, 255, 101)";
            break;
        case 2:
           document.getElementById("1").style.backgroundColor = "rgb(101, 255, 101)";
           document.getElementById("2").style.backgroundColor = "red";
           document.getElementById("3").style.backgroundColor = "rgb(101, 255, 101)";
            break;
        case 3:
           document.getElementById("1").style.backgroundColor = "rgb(101, 255, 101)";
           document.getElementById("2").style.backgroundColor = "rgb(101, 255, 101)";
           document.getElementById("3").style.backgroundColor = "red";
            break;
        default:
            break;
    }

}

