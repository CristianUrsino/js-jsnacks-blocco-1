
const primoArray = [];
const secondoArray = [];

riempi(primoArray);
riempi(secondoArray);
const indexPrimoArray = primoArray.length;
const indexSecondoArray = secondoArray.length;
console.log('il primo array è: ' + primoArray + '(' + indexPrimoArray + ' valori)');
console.log('il secondo array è: ' + secondoArray + '(' + indexSecondoArray + ' valori)');


if(indexPrimoArray < indexSecondoArray){
    for(let i = indexPrimoArray - 1; i < indexSecondoArray - 1; i++){
        primoArray.push(randomInteger(1,99));
    }
    console.log('il primo array è DIVENTATO: ' + primoArray + '(' + indexSecondoArray + ' valori)');
}else if(indexSecondoArray < indexPrimoArray) {
    for(let i = indexSecondoArray - 1; i < indexPrimoArray - 1; i++){
        secondoArray.push(randomInteger(1,99));
    }
    console.log('il secondo array è DIVENTATO: ' + secondoArray + '(' + indexPrimoArray + ' valori)');
}else {
    console.log('i due array sono uguali');
}




function riempi(array){
    for (let i = 0; i < randomInteger(3 , 30); i++){
        array.push(randomInteger(1,99));
    }
}