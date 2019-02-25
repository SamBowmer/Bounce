var i = 0;

  function clicked(){
    var b = document.getElementById("mainButton");
    var op = 0.9;
    var fade = setInterval(lowerOp, 10);
    function lowerOp() { 
      if(op > 0){
        b.style.opacity = op;
        op = op - 0.02;
      }
      else{
        bounce();
        clearInterval(fade);
      }
    }
  }

  function bounce() {
    console.log("bounce");
    var elem = document.getElementById("logo");
    document.getElementById("mainButton").parentNode.removeChild(document.getElementById("mainButton"));
    elem.style.visibility = "visible";
    var ySpeed = 5;
    var xSpeed = 5;
    var posy = 0;
    var posx = 0;  
    requestAnimationFrame(frame);
    function frame() { 
      var rect = elem.getBoundingClientRect();
      if (rect.top <= 0 || rect.bottom >= window.innerHeight) {
        ySpeed = ySpeed * -1;
        changeBackground();
      } 
      if (rect.left <= 0 || rect.right >= window.innerWidth) {
        xSpeed = xSpeed * -1;
        changeBackground();
      } 
      posy = posy + ySpeed;
      posx = posx + xSpeed;
      elem.style.top = posy + 'px'; 
      elem.style.left = posx + 'px';
      requestAnimationFrame(frame);
    }
  }

  function changeBackground(){
    if(i == 0){
      document.body.style.backgroundColor = "blue";
      i++;
    }
    else if(i == 1){
      document.body.style.backgroundColor = "yellow";
      i++;
    }
    else if(i == 2){
      document.body.style.backgroundColor = "lightgreen";
      i++;
    }
    else{
      document.body.style.backgroundColor = "red";
      i = 0;
    }
  }