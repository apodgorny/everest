var MyCar = function(sColor) {
	this.color = sColor;
	
	this.start = function() {
		console.log(this.color + ' car has started');
	}
	
	this.stop = function() {
		console.log(this.color + ' car has stopped');
	}
}

var oCar1 = new MyCar('Red');
var oCar2 = new MyCar('Blue');

oCar1.start();
oCar2.start();

oCar1.stop();
oCar2.stop();


// Red car has started
// Blue car has started
// Red car has stopped
// Blue car has stopped
