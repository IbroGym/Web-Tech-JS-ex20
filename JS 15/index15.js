function fact(){
    const num = parseInt(document.getElementById("num").value);
    const result = document.getElementById("result");

    let factorial = 1;
    for (let i = 1; i <= num; i++){
        factorial *= i;
    }

    result.textContent = `The factorial of ${num} is: ${factorial}`;
}