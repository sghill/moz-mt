var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

document.body.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);

canvas.addEventListener('touchstart', function (event) {
  for (var i = 0; i < event.touches.length; i ++) {
    var touch = event.touches[i];
    ctx.beginPath();
    ctx.fillStyle = '#333';
    ctx.arc(touch.pageX, touch.pageY, 20, 0, 2*Math.PI, true);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.stroke();
  }
}, false);

canvas.addEventListener('touchmove', function(e) {
  for(var i = 0, j = e.touches.length; i < j; i++) {
    var touch = e.touches[i];
    var px = touch.pageX;
    var py = touch.pageY;
    
    ctx.beginPath();
    ctx.arc(px, py, 20, 0, 2 * Math.PI, true);
    
    ctx.fillStyle = '#b9c7d3';
    ctx.fill();
    ctx.lineWidth = 2.0;
    ctx.strokeStyle = '#899aaa';
    ctx.stroke();
  }
}, false);

canvas.addEventListener('touchend', function() {
  ctx.clearRect(0, 0, 320, 450);
}, false);

/*
var rotation = 0.0, scale = 1.0;
document.addEventListener('gesturechange', function(e) {
  
});
*/