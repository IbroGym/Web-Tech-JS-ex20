function checkLeapYear() {
    const year = document.getElementById("yearInput").value;
    const result = document.getElementById("result");

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        result.textContent = year + " is a leap year.";
    } else {
        result.textContent = year + " is not a leap year.";
    }
}
