document.body.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

var pile = document.getElementById('pile');
var targets = {
  green: document.getElementById('green'),
  blue: document.getElementById('blue'),
  yellow: document.getElementById('yellow'),
  red: document.getElementById('red')
};

var score = document.getElementById('score');

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

  if(pilePosition.left < 75 && pilePosition.top < 75) {
    score.innerHTML = "hit green";
  } else if (pilePosition.left < 75 && pilePosition.bottom > (window.innerHeight - 75)){
    score.innerHTML = "hit blue";
  } else if(pilePosition.right > (window.innerWidth - 75) && pilePosition.top < 75) { 
    score.innerHTML = "hit red";
  } else if(pilePosition.right > (window.innerWidth - 75) && pilePosition.bottom > (window.innerHeight - 75)) {
    score.innerHTML = "hit yellow";
  } else {
    score.innerHTML = "missed!";
  }

  pile.style.left = toPixels((window.screen.width - pile.style.width) / 2);
  pile.style.top = toPixels((window.screen.height - pile.style.height) / 2);
}, false);


function toPixels(x) {
  return [x,"px"].join("");
}