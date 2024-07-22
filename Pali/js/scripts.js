const userWord = prompt('Inserisci una parola');
console.log('parola inserita:', userWord, typeof userWord);

isPalindrome(userWord);

//FUNZIONE

function isPalindrome(word) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        console.log(word[i]);

        reverseWord = reverseWord + word[i];

    }
    console.log('reversedWord', reverseWord, typeof reverseWord);

    if (word == reverseWord) {
        alert('La parola inserita è palindroma');
    }
    else {
        alert('La parola inserita NON è palindroma');
    }
}