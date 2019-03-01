var i = 0;

function clicked() {
  //fade out the main button and start logo animation
  //currently using intervals for fade out but I might change to animationFrames down the line
  var b = document.getElementById("mainButton");
  var op = 0.9; //op = opacity
  var fade = setInterval(lowerOp, 10);
  function lowerOp() {
    if (op > 0) {
      b.style.opacity = op;
      op = op - 0.02;
    } else {
      bounce();
      clearInterval(fade);
    }
  }
}

function bounce() {
  var elem = document.getElementById("logo");
  
  document
    .getElementById("mainButton")
    .parentNode.removeChild(document.getElementById("mainButton"));
  elem.style.visibility = "visible";
  var ySpeed = 5;
  var xSpeed = 5;
  var posy = 0;
  var posx = 0;

  //variables to keep track of times logo has perfectly hit or missed the corners
  var misses = 0;
  document.getElementById("misses").innerHTML = "Corner misses: " + misses;
  var hits = 0;
  document.getElementById("hits").innerHTML = "Corner hits: " + hits;

  //variable to keep track of direction changes per frame, if direction changes > 1 then logo has hit corner
  var changes = 0;  
  function frame() {
    changes = 0;
    var rect = elem.getBoundingClientRect();

    if (rect.top <= 0 || rect.bottom >= window.innerHeight) {
      ySpeed = ySpeed * -1;
      changeBackground();
      changes++;
    }
    if (rect.left <= 0 || rect.right >= window.innerWidth) {
      xSpeed = xSpeed * -1;
      changeBackground();
      changes++;
    }

    if (changes > 1) {
      hits++;
      document.getElementById("hits").innerHTML = "Corner hits: " + hits;
    } else if (changes == 1) {
      misses++;
      document.getElementById("misses").innerHTML = "Corner misses: " + misses;
    }

    posy = posy + ySpeed;
    posx = posx + xSpeed;

    elem.style.transform = `translate(${posx}px, ${posy}px)`;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function changeBackground() {
  if (i == 0) {
    document.body.style.backgroundColor = "blue";
    i++;
  } else if (i == 1) {
    document.body.style.backgroundColor = "yellow";
    i++;
  } else if (i == 2) {
    document.body.style.backgroundColor = "lightgreen";
    i++;
  } else {
    document.body.style.backgroundColor = "red";
    i = 0;
  }
}
