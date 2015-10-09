exports.Shape = function() {

}

exports.Shape2d = function(name, color){
	this.getColor = function(){
		return color;
	}
	
}
exports.Shape2d.prototype = Object.create(exports.Shape.prototype);
exports.Shape2d.prototype.constructor = exports.Shape;
//Voodoo Magic to make Shape2d inherit from Shape

exports.Circle = function(name, color, radius){
	this.name = name;
	this.color = color;
	this.radius = radius;
	this.getArea = function(){
		return Math.PI * radius * 2;
	}
	this.getDiameter = function(){
		return radius * 2;
	}
	this.getRadius =function(){
		return radius;
	}
	this.getColor = function(){
		return color;
	}

}
exports.Circle.prototype = Object.create(exports.Shape2d.prototype);

//Voodoo Magic to make Circle inherit from Shape2d

exports.Shape3d = function(){
	
}
exports.Shape.prototype = Object.create(exports.Shape3d.prototype)
//Voodoo Magic to make Shape3d inherit from Shape
exports.Shape3d.prototype = Object.create(exports.Shape.prototype);

exports.Cube = function(name, color, radius){
	this.getVolume = function(){
		return radius*radius*radius;
	}
	this.getColor = function(){
		return color;
	}

}
//Voodoo Magic to make Cube inherit from Shape3d
exports.Cube.prototype = Object.create(exports.Shape3d.prototype);



