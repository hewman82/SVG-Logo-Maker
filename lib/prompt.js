const questions = [ {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters of text',
    }, {
        type: 'input',
        name: 'text-color',
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
