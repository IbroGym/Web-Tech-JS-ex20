function Area(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const result = document.getElementById("result");

    const p = (num1 + num2 + num3) / 2;

    const area = Math.sqrt(p * (p - num1) * (p - num2) * (p - num3));
    result.textContent = `The area is: ${area.toFixed(2)}`;
}