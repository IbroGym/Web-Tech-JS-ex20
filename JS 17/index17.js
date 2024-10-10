function transformation(){
    const seconds = parseFloat(document.getElementById("seconds").value);
    const result = document.getElementById("result");

    const hours = parseInt(seconds / 3600);
    const minutes = seconds % 3600 / 60;

    result.textContent = `Hours: ${hours}\nMinutes: ${minutes}`;
}