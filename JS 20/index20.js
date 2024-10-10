function calculateDaysLeft() {
    const result = document.getElementById("result");
    
    // Текущая дата
    const today = new Date();
    
    // Дата следующего Нового года
    const nextYear = today.getFullYear() + 1;
    const newYearDate = new Date(`January 1, ${nextYear}`);

    // Разница в миллисекундах
    const difference = newYearDate - today;

    // Перевод миллисекунд в дни
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    // Вывод результата
    result.textContent = `There are ${daysLeft} days left until New Year!`;
}
