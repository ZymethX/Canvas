var canvas=document.getElementById('cnvs');
var ctx = canvas.getContext('2d');
ctx.moveTo(0,0);
ctx.lineWidth = 10; // толщина линии

canvas.onclick = function () {
  var x=event.offsetX;
  var y=event.offsetY;
ctx.lineTo(x, y); //рисуем линию
ctx.stroke();
}