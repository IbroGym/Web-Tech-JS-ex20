function MostFrequent() {
    let num = document.getElementById("array").value; // Получаем введенное пользователем число
    const result = document.getElementById("result");

    // Инициализируем счетчики для каждой цифры
    let frequency = { 
        0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 
        5: 0, 6: 0, 7: 0, 8: 0, 9: 0 
    };

    // Перебираем все цифры числа
    for (let i = 0; i < num.length; i++) {
        let digit = parseInt(num[i]); // Получаем текущую цифру
        frequency[digit]++; // Увеличиваем счетчик для этой цифры
    }

    // Находим максимальную частоту
    let maxFreq = Math.max(...Object.values(frequency));

    // Находим все цифры с этой максимальной частотой
    let mostFrequentDigits = [];
    for (let digit in frequency) {
        if (frequency[digit] === maxFreq) {
            mostFrequentDigits.push(digit);
        }
    }

    // Выводим результат
    result.textContent = `The most frequent digit(s): ${mostFrequentDigits.join(', ')} (appears ${maxFreq} times)`;
}
