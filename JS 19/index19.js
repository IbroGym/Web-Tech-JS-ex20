function Fibonacci() {
    const num = parseInt(document.getElementById("num").value);
    const result = document.getElementById("result");

    if (num < 0) {
        result.textContent = "Please enter a non-negative integer.";
        return;
    }

    let fib = fibonacci(num);
    result.textContent = `Fibonacci number at position ${num} is: ${fib}`;
}

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
