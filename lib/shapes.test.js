const {Circle, Square, Triangle} = require('./shapes');

// A testing suite for the Circle class is created.
describe('Circle', () => {
    // A test is created to check that render returns the correct string for the svg file
    describe('render', () => {
      it('should return a string for the svg file with the correct shape, color, and text color', () => {
        let shape = new Circle('white', 'Cir', 'blue');
        expect(shape.render(shape.dimensions, shape.setColor('white'), shape.textScript)).toEqual(`<circle cx="150" cy="100" r="80" fill="white"/>
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">Cir</text>`);
      });
    });
  });

// A testing suite for the Square class is created.
describe('Square', () => {
    // A test is created to check that render returns the correct string for the svg file
    describe('render', () => {
      it('should return a string for the svg file with the correct shape, color, and text color', () => {
        let shape = new Square('black', 'Squ', 'purple');
        expect(shape.render(shape.dimensions, shape.setColor('black'), shape.textScript)).toEqual(`<rect x="70" y="30" width="160" height="160" fill="black"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">Squ</text>`);
      });
    });
  });

// A testing suite for the Triangle class is created.
describe('Triangle', () => {
    // A test is created to check that render returns the correct string for the svg file
    describe('render', () => {
      it('should return a string for the svg file with the correct shape, color, and text color', () => {
        let shape = new Triangle('blue', 'Tri', 'orange');
        expect(shape.render(shape.dimensions, shape.setColor('blue'), shape.textScript)).toEqual(`<polygon points = "150, 18 244, 182 56, 182" fill="blue"/>
        <text x="150" y="130" font-size="50" text-anchor="middle" fill="orange">Tri</text>`);
      });
    });
  });

