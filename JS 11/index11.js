function convertTemperature() {
    const temp = parseFloat(document.getElementById("temp").value);
    const conversionType = document.getElementById("conversionType").value;
    const result = document.getElementById("result");

    if (conversionType === "Celsius") {
        const celsius = (temp - 32) * 5 / 9;
        result.textContent = `${temp}°F is ${celsius.toFixed(6)}°C`;
    } else if (conversionType === "Fahrenheit") {
        const fahrenheit = (temp * 9 / 5) + 32;
        result.textContent = `${temp}°C is ${fahrenheit.toFixed(6)}°F`;
    }
}
