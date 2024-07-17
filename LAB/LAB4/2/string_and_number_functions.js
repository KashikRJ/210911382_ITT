function findVowelPosition() {
    let str = prompt("Enter a string:");
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            alert(`Left-most vowel position: ${i}`);
            return;
        }
    }
    alert("No vowels found in the string.");
}

function reverseNumber() {
    let num = prompt("Enter a number:");
    let reversedNum = num.split('').reverse().join('');
    alert(`Reversed number: ${reversedNum}`);
}
