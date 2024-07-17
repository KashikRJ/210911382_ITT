let textElement = document.getElementById('dynamicText');
let fontSize = 5;
let growing = true;

function updateTextSize() {
    textElement.style.fontSize = fontSize + 'pt';

    if (growing) {
        if (fontSize >= 50) {
            growing = false;
            textElement.textContent = 'TEXT-SHRINKING';
            textElement.style.color = 'blue';
        } else {
            fontSize++;
        }
    } else {
        if (fontSize <= 5) {
            growing = true;
            textElement.textContent = 'TEXT-GROWING';
            textElement.style.color = 'red';
        } else {
            fontSize--;
        }
    }
}

setInterval(updateTextSize, 100);
