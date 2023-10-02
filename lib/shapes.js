class Shape {
    constructor(text, textColor, color) {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }
}

Shape.prototype.setColor = function() {

}

Shape.prototype.render = function() {

}

class Triangle extends Shape {
    constructor() {
        super(text, textColor, color);
    }
}

class Cirlce extends Shape {
    constructor() {
        super(text, textColor, color);
    }
}

class Square extends Shape {
    constructor() {
        super(text, textColor, color);
    }
}