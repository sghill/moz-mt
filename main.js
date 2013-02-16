document.body.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

var pile = document.getElementById('pile');
var targets = {
  green: document.getElementById('green'),
  blue: document.getElementById('blue'),
  yellow: document.getElementById('yellow'),
  red: document.getElementById('red')
};

var startButton = document.getElementById('start');
var score = document.getElementById('score');

var total = 0;

var game = [];

startButton.addEventListener('click', function() {
  startButton.disabled = true;
  total = 0;
  var options = ["red", "blue", "green", "yellow"];
  game = []
  for(var i = 0; i < 5; i++) {
    game.push(options[Math.floor(Math.random() * 4)])
  }
  var counter = 0;
  var interval = setInterval(function() {
    pile.innerHTML = counter + ": " + game[counter];
    counter++;
    if(counter > game.length) {
      clearInterval(interval);
      pile.innerHTML = "";
      startButton.disabled = false;
    }
  }, 750);
});

pile.addEventListener('touchmove', function(e) {
  _.each(e.touches, function(touch) {
    pile.style.left = toPixels(touch.pageX);
    pile.style.top = toPixels(touch.pageY);
  });
}, false);

pile.addEventListener('touchend', function() {
  var pilePosition = {
    left: parseInt(pile.style.left),
    right: parseInt(pile.style.left) + 50,
    bottom: parseInt(pile.style.top) + 50,
    top: parseInt(pile.style.top)
  };
  
  var nextColor = game.pop();
  if(pilePosition.left < 75 && pilePosition.top < 75) {
    // green
    if(nextColor === "green") { total++; }
    else { total--; }
  } else if (pilePosition.left < 75 && pilePosition.bottom > (window.innerHeight - 75)){
    // blue
    if(nextColor === "blue") { total++; }
    else { total--; }
  } else if(pilePosition.right > (window.innerWidth - 75) && pilePosition.top < 75) { 
    // red
    if(nextColor === "red") { total++; }
    else { total--; }
  } else if(pilePosition.right > (window.innerWidth - 75) && pilePosition.bottom > (window.innerHeight - 75)) {
    // yellow
    if(nextColor === "yellow") { total++; }
    else { total--; }
  } else {
    score.innerHTML = "missed!";
  }
  score.innerHTML = total;
  pile.style.left = toPixels((window.screen.width - pile.style.width) / 2);
  pile.style.top = toPixels((window.screen.height - pile.style.height) / 2);
}, false);


function toPixels(x) {
  return [x,"px"].join("");
}