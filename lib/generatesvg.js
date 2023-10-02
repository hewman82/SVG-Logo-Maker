function generateSVG(data) {
    return `<svg width="300" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${data}
    </svg>`;
}

module.exports = generateSVG;