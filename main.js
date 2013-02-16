document.body.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

var pile = document.getElementById('pile');

pile.addEventListener('touchmove', function(e) {
  _.each(e.touches, function(touch) {
    pile.style.left = touch.pageX + "px";
    pile.style.top = touch.pageY + "px";
  });
}, false);

pile.addEventListener('touchend', function() {
  pile.style.left = ((window.innerWidth - pile.style.width) / 2) + "px";
  pile.style.top = ((window.innerHeight - pile.style.height) / 2) + "px";
}, false);