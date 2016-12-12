$(document).ready(function(){
    
    var but1 = document.getElementById('pic1');
    var but2 = document.getElementById('pic2');
    var but3 = document.getElementById('pic3');
    var but4 = document.getElementById('pic4');
    var but5 = document.getElementById('pic5');
            
    var display1 = document.getElementById('profDiv');
    var display2 = document.getElementById('profDiv1');
    var display3 = document.getElementById('bioDiv');
            
    var r = 0;
    var g = 0;
    var b = 0;
            
    but1.onclick = function(){
        r = Math.round(Math.random()*255);
                
        display1.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    }
            
    but2.onclick = function(){
        but1.style.backgroundImage = 'url(img/doge.gif)';
    }
            
    but3.onclick = function(){
        r = Math.round(Math.random()*255);
                
        display2.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    }
            
    but4.onclick = function(){
        but5.style.backgroundImage = 'url(img/doge.gif)';
    }
            
    but5.onclick =function(){
        r = Math.round(Math.random()*255);
                
        display3.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    }
});