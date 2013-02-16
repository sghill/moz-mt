document.body.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

var pile = document.getElementById('pile');
var greenTarget = document.getElementById('green');
var blueTarget = document.getElementById('blue');
var redTarget = document.getElementById('red');
var yellowTarget = document.getElementById('yellow');
var score = document.getElementById('score');

pile.addEventListener('touchmove', function(e) {
  _.each(e.touches, function(touch) {
    pile.style.left = touch.pageX + "px";
    pile.style.top = touch.pageY + "px";
  });
}, false);

pile.addEventListener('touchend', function() {
  score.innerHTML = parseInt(score.innerHTML) + 5;
  pile.style.left = ((window.screen.width - pile.style.width) / 2) + "px";
  pile.style.top = ((window.screen.height - pile.style.height) / 2) + "px";
}, false);