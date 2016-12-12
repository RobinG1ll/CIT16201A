$(document).ready(function(){
    var userInput = document.getElementById('userIn');
    var imageInput = document.getElementById('imageIn');
    var movieInput = document.getElementById('movieIn');
    var commentInput = document.getElementById('commentIn');
    
    var postDiv = document.getElementById('results');
    var subbut = document.getElementById('submit');
    
    var userEX = /^[a-zA-Z0-9]{8,15}$/;
    var imgEX = /\.(jpg|jpeg|png|gif)$/;
    var movEX = /^[a-zA-z ]{1,}$/;
    var commentEX = /^[a-zA-Z0-9 \.\,\?\!]{1,100}$/;
    
    userInput.onkeyup = function() {
        if((userEX.test(userInput.value) == true) && (imgEX.test(imageInput.value) == true) && (movEX.test(movieInput.value) == true) && (commentEX.test(commentInput.value))) {
            subbut.removeAttribute('disabled');
        } else {
            subbut.setAttribute('disabled', '');
        }
    }
    
    userInput.onkeyup = function() {
        if(userEX.test(this.value) == true) {
            this.style.color = 'lightgreen';
        } else {
            this.style.color = 'red';
        }
    }
    
    imageInput.onkeyup = function() {
        if(imgEX.test(this.value) == true) {
            this.style.color = 'lightgreen';
        } else {
            this.style.color = 'red';
        }
    }
    
    movieInput.onkeyup = function() {
        if(movEX.test(this.value) == true) {
            this.style.color = 'lightgreen';
        } else {
            this.style.color = 'red';
        }
    }
    
    commentInput.onkeyup = function() {
        if(commentEX.test(this.value) == true) {
            this.style.color = 'lightgreen';
        } else {
            this.style.color = 'red';
        }
    }
    
    subbut.onclick = function(){
        var newCom = document.createElement('div');
        postDiv.appendChild(newCom);
        
        newCom.style.position = 'absolute';
        newCom.style.height = '25vh';
        newCom.style.width = '90vw';
        newCom.style.backgroundColor = 'red';
        
        var newImg = document.createElement('img');
        newCom.appendChild(newImg);
        
        newImg.src = imageInput.value;
        newImg.className = 'picThumb';
        
        var bodyDiv = document.createElement('div');
        newCom.appendChild(bodyDiv);
        
        bodyDiv.innerHTML = commentInput.value;
        bodyDiv.className = 'bodText';
        bodyDiv.style.width = '53vw';
        bodyDiv.style.height = '21vh';
        bodyDiv.style.left = '220px';
        bodyDiv.style.position = 'absolute';
        bodyDiv.style.margin = '20px';
        bodyDiv.style.backgroundColor = 'white';
        
        $.ajax({
            url: "https://www.omdbapi.com/?t="+movieInput.value,
            dataType:"jsonp",
            success:function(resp) {
                console.log(resp);
                
                var movPost = document.createElement("img");
                movPost.className = 'postThumb';
                movPost.src = resp.Poster;
                newCom.appendChild(movPost);
            }
        })
       
        var userDiv = document.createElement('div');
        newCom.appendChild(userDiv);
        
        userDiv.innerHTML = userInput.value;
        userDiv.className = 'userText';
        userDiv.style.top = '20vh';
        userDiv.style.height = '40px';
        userDiv.style.width = '200px';
        userDiv.style.background = 'grey';
        userDiv.style.borderRadius = '100px';
    }
});