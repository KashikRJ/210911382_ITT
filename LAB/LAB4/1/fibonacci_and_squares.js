function generateFibonacci() {
    let n = parseInt(prompt("Enter the number of Fibonacci numbers to generate:"));
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    alert(`First ${n} Fibonacci numbers: ${fib.slice(0, n).join(', ')}`);
}

function generateSquaresTable() {
    let n = parseInt(prompt("Enter a number:"));
    let result = "Number - Square\n";
    for (let i = 1; i <= n; i++) {
        result += `${i} - ${i * i}\n`;
    }
    alert(result);
}
