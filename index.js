// Import dependencies, shape classes, generateSVG function
const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const generateSVG = require('./lib/generatesvg.js');

// Inquirer prompt questions
const questions = [ {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters of text',
}, {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color for the text (Color keyword or hexadecimal number)',
}, {
    type: 'checkbox',
    name: 'shape',
    message: 'Select a shape',
    choices: ['Square', 'Triangle', 'Circle'],
}, {
    type: 'input',
    name: 'color',
    message: 'Enter a color for the shape (Color keyword or hexadecimal number)',
} ];

function writeToFile(fileName, data) {
    
    // Use write file method
    fs.writeFile(fileName, generateSVG(data), (err) => 
        err ? console.error(err) : console.log('Logo generated!')
    );
}

function init() {
    inquirer.prompt(questions)
    .then ((response) => {

        // Create new class based on chosen shape
        if(`${response.shape}` === "Triangle") {
            // New constructor class with parameters from prompt responses
            var shape = new Triangle(response.color, response.text, response.textColor);
        } else if(`${response.shape}` === 'Circle') {
            var shape = new Circle(response.color, response.text, response.textColor);
        } else if (`${response.shape}` === 'Square') {
            var shape = new Square(response.color, response.text, response.textColor);
        }
        // Call writeToFile function
        writeToFile('logo.svg', shape.render(shape.dimensions, shape.setColor(shape.color), shape.textScript));
    });
}

init();