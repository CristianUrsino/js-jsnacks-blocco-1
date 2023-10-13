
const frutta = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola' ];
const pesca = 'pesca';
const cocomero = 'cocomero';
let flag = false;

for(i = 0; i < frutta.length && !flag; i++){
    if(cocomero === frutta[i]){
        flag = true;
        console.log('il ' + cocomero + " è presente nello spazio " + (i + 1));
    }
}