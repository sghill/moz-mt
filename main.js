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
var gameLength = 5;
var turn = 0;
var game = [];

startButton.addEventListener('click', function() {
  startButton.disabled = true;
  total = 0;
  var options = ["red", "blue", "green", "yellow"];
  game = []
  for(var i = 0; i < gameLength; i++) {
    game.push(options[Math.floor(Math.random() * 4)])
  }
  var counter = 0;
  var interval = setInterval(function() {
    pile.innerHTML = counter + ": " + game[counter];
    counter++;
    if(counter > game.length) {
      clearInterval(interval);
      pile.innerHTML = "turn 0";
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
  
  var nextColor = game[0];
  if(pilePosition.left < 75 && pilePosition.top < 75) {
    answer(nextColor === "green");
  } else if (pilePosition.left < 75 && pilePosition.bottom > (window.innerHeight - 75)){
    answer(nextColor === "blue");
  } else if(pilePosition.right > (window.innerWidth - 75) && pilePosition.top < 75) { 
    answer(nextColor === "red")
  } else if(pilePosition.right > (window.innerWidth - 75) && pilePosition.bottom > (window.innerHeight - 75)) {
    answer(nextColor === "yellow")
  } else {
    return;
  }
  score.innerHTML = total;
  pile.innerHTML = "turn " + ++turn;
  pile.style.left = toPixels((window.screen.width / 2) - 25);
  pile.style.top = toPixels((window.screen.height / 2) - 50);
  if(game.length === 0) {
    score.innerHTML = "game over! score: " + total;
  }
}, false);

function answer(correct) {
  if(correct) {
    total++;
    game.shift();
  } else {
    total--;
  }
}

function toPixels(x) {
  return [x,"px"].join("");
}