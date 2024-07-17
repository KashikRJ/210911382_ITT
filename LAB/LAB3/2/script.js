document.getElementById('pigLatinForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let inputText = document.getElementById('input').value;
    let pigLatinText = convertToPigLatin(inputText);

    // Get the current content of the textarea and append the new sentence
    let outputTextArea = document.getElementById('output');
    outputTextArea.value += (outputTextArea.value ? '\n' : '') + pigLatinText;

    // Clear the input field after submitting
    document.getElementById('input').value = '';
});

function convertToPigLatin(text) {
    return text.split(' ').map(word => {
        if(word.length > 1) {
            return word.slice(1) + word[0] + 'ay';
        }
        return word;
    }).join(' ');
}
