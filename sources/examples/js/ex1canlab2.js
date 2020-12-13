    var canvas = document.getElementById("ex1canlab2");
    var context = canvas.getContext('2d');
    context.moveTo(150,60);
	context.lineTo(50,140);
	context.lineTo(250,140);
	context.closePath();

	// Заливка
	context.fillStyle = "#E31B6D";
	context.fill();

	// Контур
	context.lineWidth = 10;
	context.strokeStyle = "#404040";
	context.stroke();