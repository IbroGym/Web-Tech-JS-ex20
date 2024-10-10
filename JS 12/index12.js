function EvenOdd(){
    const num = parseInt(document.getElementById("num").value);
    const result = document.getElementById("result");

    if(num % 2 == 0){
        result.textContent = `The number is even`;
    }
    else{
        result.textContent = `The number is odd`;
    }
}