// Function to return string for svg file based on input
function generateSVG(data) {
    return `<svg width="300" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${data}
    </svg>`;
}

// Export function
module.exports = generateSVG;