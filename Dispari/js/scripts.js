// faccio sciegliere all'utente pari o dispari
const userChoice = prompt('Pari o Dispari?');
console.log('Hai scelto:', userChoice, typeof userChoice);


/* 
let pari = [
    Pari,
    PAri,
    PARi,
    PARI,
    pAri,
    pARi,
    pARI,
    paRi,
    paRI,
    parI,
    ParI,
    pArI,
    pari
]; */
//faccio finta di averlo fatto anche per dispari :)
do {
    alert('scegli pari o dispari');
} while (userChoice == 'pari' && userChoice == 'dispari');

/* if (userChoice != 'pari' && userChoice != 'dispari') {
    alert('scegli pari o dispari');
}; */

// faccio inserire all'utente un numero tra 1 e 5

const userNumb = parseInt(prompt('Scegli un numero tra 1 e 5'));
if (userNumb >= 1 && userNumb <= 5) {
    console.log('Numero utente scelto:', userNumb, typeof userNumb);
}
else {
    alert('Scegli un numero compreso fra 1 e 5!!');
}
//genero un numero random tra 1 e 5 per il computer 

/* const min = 1;
const max = 5; */
const numberCpu = randomCpuNum();
console.log('numberCpu', numberCpu, typeof numberCpu);

function randomCpuNum(min, max) {
    return Math.floor(Math.random() * (5) ) + 1;
}




// sommo numero utente e numero random
const sum = numberCpu + userNumb;
console.log('somma dei numeri:', sum, typeof sum);

if (sum % 2 == 0) {
    alert('ha vinto PARI');
}
else {
    alert('ha vinto DISPARI');
}
// in base a cosa sceglie l'utente dichiara chi vince  