function generateWords() {
    let inputWord = document.getElementById('wordInput').value;
    let output = new Set();

    if(inputWord.length === 5) {
        for (let i = 0; i < inputWord.length; i++) {
            for (let j = 0; j < inputWord.length; j++) {
                for (let k = 0; k < inputWord.length; k++) {
                    if (i !== j && i !== k && j !== k) {
                        output.add(inputWord[i] + inputWord[j] + inputWord[k]);
                    }
                }
            }
        }
    }

    document.getElementById('wordOutput').value = Array.from(output).join('\n');
}
