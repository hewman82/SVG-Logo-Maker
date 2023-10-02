const fs = require('fs');
const inquirer = require('inquirer');
const Triangle = require('./lib/shapes.js');

const generateSVG = require('./lib/generatesvg.js');

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
    // Use write file method with filename and data parameters
    fs.writeFile(fileName, generateSVG(data), (err) => 
        err ? console.error(err) : console.log('Logo generated!')
    );
}

function init() {
    inquirer.prompt(questions)
    .then ((response) => {
        const shape = new Triangle(response.color, response.text, response.textColor);
        writeToFile('logo.svg', shape.render(shape.dimensions, shape.textScript));
    });
}

init();