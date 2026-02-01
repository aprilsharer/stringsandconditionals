// Candy analyzer project

document.addEventListener('DOMContentLoaded', function() {
    const analyzeBtn = document.getElementById('analyzeBtn');
    analyzeBtn.addEventListener('click', analyzeCandy);
});

function analyzeCandy() {
    // Get the values from the form
    const userName = document.getElementById('userName').value;
    const candyName = document.getElementById('candyName').value;
    const candyPrice = document.getElementById('candyPrice').value;
    const candyType = document.getElementById('candyType').value;

    // Check if all fields are filled (if conditional)
    if (!userName || !candyName || !candyPrice || !candyType) {
        showError('Please fill out all fields!');
        return;
    }

    // Check if price is valid (if conditional)
    if (parseFloat(candyPrice) <= 0) {
        showError('Price must be greater than zero!');
        return;
    }

    // CONCATENATED STRING - combining multiple variables into one string
    const greeting = 'Hello ' + userName + '! ';
    const info = 'Your favorite candy is ' + candyName + ' and it costs $' + candyPrice + '.';
    const message = greeting + info;
    
    console.log(message);

    // STRING METHODS
    const upperCaseName = candyName.toUpperCase();
    const lowerCaseName = candyName.toLowerCase();
    const nameLength = candyName.length;
    
    console.log('Uppercase:', upperCaseName);
    console.log('Lowercase:', lowerCaseName);
    console.log('Length:', nameLength);

    // NUMBER METHODS
    const price = parseFloat(candyPrice);
    const fixedPrice = price.toFixed(2);
    const tenPieces = price * 10;
    const tenPiecesFixed = tenPieces.toFixed(2);
    
    console.log('Price:', fixedPrice);
    console.log('Ten pieces cost:', tenPiecesFixed);

    // IF/ELSE CONDITIONAL for price category
    let priceCategory = '';
    if (price < 1.00) {
        priceCategory = 'Budget candy';
    } else if (price >= 1.00 && price < 2.00) {
        priceCategory = 'Average price';
    } else {
        priceCategory = 'Premium candy';
    }

    // SWITCH STATEMENT for candy type
    let typeInfo = '';
    let suggestions = '';
    
    switch(candyType) {
        case 'chocolate':
            typeInfo = 'Chocolate candy';
            suggestions = 'You might also like: Hershey bars, Kit Kats';
            break;
        case 'gummy':
            typeInfo = 'Gummy candy';
            suggestions = 'You might also like: Gummy bears, Sour worms';
            break;
        case 'hard':
            typeInfo = 'Hard candy';
            suggestions = 'You might also like: Jolly Ranchers, Lifesavers';
            break;
        case 'sour':
            typeInfo = 'Sour candy';
            suggestions = 'You might also like: Sour Patch Kids, Warheads';
            break;
        case 'licorice':
            typeInfo = 'Licorice candy';
            suggestions = 'You might also like: Twizzlers, Red Vines';
            break;
        default:
            typeInfo = 'Other candy';
            suggestions = 'Try exploring different candy types!';
    }

    // Display results
    showResults(message, upperCaseName, nameLength, fixedPrice, tenPiecesFixed, priceCategory, typeInfo, suggestions);
}

function showResults(message, upperName, length, price, bulk, category, type, suggestions) {
    const output = document.getElementById('output');
    
    let html = '<p><strong>Your Info:</strong> ' + message + '</p>';
    html += '<p><strong>Candy Name (uppercase):</strong> ' + upperName + '</p>';
    html += '<p><strong>Name has ' + length + ' letters</strong></p>';
    html += '<p><strong>Price:</strong> $' + price + '</p>';
    html += '<p><strong>Ten pieces:</strong> $' + bulk + '</p>';
    html += '<p><strong>Price Category:</strong> ' + category + '</p>';
    html += '<p><strong>Type:</strong> ' + type + '</p>';
    html += '<p><strong>Suggestions:</strong> ' + suggestions + '</p>';
    
    output.innerHTML = html;
}

function showError(message) {
    const output = document.getElementById('output');
    output.innerHTML = '<div class="error">' + message + '</div>';
}