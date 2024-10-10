function LargeLeast(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const result = document.getElementById("result");

    const largest = Math.max(num1, num2, num3);
    const least = Math.min(num1, num2, num3);

    result.textContent = `The largest number is: ${largest}. The least number is: ${least}`;    
}