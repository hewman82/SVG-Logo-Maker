class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    
    render(dimensions, textScript) {
        var colorString = `fill="${this.color}"/>`;
        return `${dimensions} ${colorString}
        ${textScript}`;
    }
}



class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.dimensions = '<polygon points = "150, 18 244, 182 56, 182"';
        this.textScript = `<text x="150" y="130" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
}

class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.dimensions = '<circle cx="150" cy="100" r="80"';
        this.textScript = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
}

class Square extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
        this.dimensions = '<rect x="10" y="10" width="30" height="30"';
        this.textScript = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
}

module.exports = Triangle;

/*module.exports = setColor;*/