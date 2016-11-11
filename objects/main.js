var polygon = {
    x: 100,
    y: 100,
    radius: 300,
    sides: 5,
    topPoint: {
        x: 100,
        y: 50
    }
};

document.write(polygon['x']);
document.write('<br/>');
document.write(polygon.x);
document.write('<br/>');

try {
    document.write(polygon[x]);
} catch(err) {
    document.write(err);
}

polygon.x = 400;
document.write('<br/>');
document.write(polygon.x);
document.write('<br/>');
document.write('<br/>');

/*----*/

var demoObject = {
  prop1: 'first',
  prop2: 'second',
  prop3: 'third',
  'some prop': 'some text'
};

for (var i = 1; i <= 3; i++) {
    document.write(demoObject['prop' + i]);
    document.write('<br/>');
}

document.write(demoObject['some prop']);
document.write('<br/>');
document.write('<br/>');

/*----*/

var table = {
    color: 'red',
    type: 'desk',
    height: 100,
    legsCount: 4,
    paint: function (newColor) {
        if (newColor) this.color = newColor;
        document.write( this.color );
    }
};

document.write(table.paint);
document.write('<br/>');
table.paint();
document.write('<br/>');
table['paint']();
document.write('<br/>');
table.paint('green');
document.write('<br/>');
