angular.module('Netsafe').factory('mySketch', function(p5) {
  return function(sketch) {
    var x = 100;
    var y = 100;

    var btn_kyubey;

    sketch.setup = function() {
      sketch.createCanvas(700, 410);
      btn_kyubey.createButton('kyubey');
    };

    sketch.draw = function() {
      sketch.background(0);
      sketch.fill(255);
      sketch.rect(x, y, 50, 50);
    };
  };
});
