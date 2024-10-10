function countVowelsAndConsonants() {
    const str = document.getElementById("String").value;
    const vowels = "aeiouAEIOU";
    const result = document.getElementById("result");

    let vowelCount = 0;
    let consonantCount = 0;

    const cleanStr = str.replace(/[^a-zA-Z]/g, '');

    for (let char of cleanStr) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }

    result.textContent = `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
}
