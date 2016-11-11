// DOM-элемент канваса
var canvas = document.querySelector('canvas');

// Контекст отрисовки
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'tomato';
ctx.fillRect(0, 0, 200, 150);
ctx.fillRect(210, 0, 30, 30);

ctx.fillStyle = 'lightgreen';
ctx.fillRect(210, 40, 30, 30);



var gradient = ctx.createLinearGradient(0, 0, 300, 150);
gradient.addColorStop(0, 'green');
gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');

ctx.fillStyle = gradient;
ctx.fillRect(250, 0, 300, 150);



