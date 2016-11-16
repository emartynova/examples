/**
 * Переменные, названные заглавными буквами, по соглашению, считаются
 * постоянными.
 * @constant {number}
 */
var TILE_SIZE = 256;

/** @constant {number} */
var DIAMOND_SIZE = 64;

/**
 * Функция getMapTile будет использоваться
 * для отрисовки прямоугольников поверх карты
 * @return {HTMLCanvasElement}
 */
var getMapTile = function() {
    // Каждый канвас будет замощен ромбами,
    // непрозрачность заливки которых будет означать
    // количество ресторанов под указанным ромбом.
    // Для простоты непрозрачность будем получать,
    // генерируя случайное число.

    var canvasElement = document.createElement('canvas');

    canvasElement.setAttribute('width', TILE_SIZE);
    canvasElement.setAttribute('height', TILE_SIZE);

    var ctx = canvasElement.getContext('2d');

    var x;
    var y = -DIAMOND_SIZE / 2;
    var row = 1;

    while (y < TILE_SIZE) {
        x = row % 2 === 0 ? -DIAMOND_SIZE / 2 : 0;

        while (x < TILE_SIZE) {
            drawDiamond(ctx, DIAMOND_SIZE, x, y);
            x += DIAMOND_SIZE;
        }

        y += DIAMOND_SIZE / 2;
        row++;
    }

    return canvasElement;
};

/**
 * Рисует ромб, вписанный в прямоугольник
 * с заданными координатами
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} size
 * @param {number} x
 * @param {number} y
 */
var drawDiamond = function(ctx, size, x, y) {
    ctx.beginPath();
    ctx.moveTo(x + size / 2, y);
    ctx.lineTo(x + size, y + size / 2);
    ctx.lineTo(x + size / 2, y + size);
    ctx.lineTo(x, y + size / 2);
    ctx.lineTo(x + size / 2, y);
    ctx.fillStyle = getRandomColor();
    ctx.fill();
};

/** @return {string} */
var getRandomColor = function() {
    return 'rgba(30, 128, 30, ' + (Math.random() * 0.6).toFixed(1) + ')';
};


document.body.appendChild(getMapTile());