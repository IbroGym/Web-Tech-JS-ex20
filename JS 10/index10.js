function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = document.getElementById("result");

    result.textContent = num1 * num2;
    
}

function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = document.getElementById("result");

        if (num2 !== 0) {
            result.textContent = num1 / num2;
        } else {
            result.textContent = "Cannot divide by zero.";
        }

}
