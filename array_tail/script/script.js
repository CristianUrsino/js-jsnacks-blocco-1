
const btn = document.querySelector('button');
const inputEl = document.getElementById('numero');
const inputVis = document.getElementById('visualizzati');
const resultEl = document.querySelector('.alert');

btn.addEventListener('click', function(){
    const numero = parseInt(inputEl.value);
    const visualizzati = parseInt(inputVis.value);
    const numeriGenerati = [];
    let msg = '';
    if(isNaN(numero) || isNaN(visualizzati) || numero < 1 || visualizzati < 1){
        resultEl.innerHTML = 'errore inserire numeri interi positivi';
    }else if (visualizzati > numero){
        resultEl.innerHTML = 'errore il valore dei numeri visualizzati deve essere inferiore a quelli generati';
    }else{
        for(let i = 0; i < numero; i++){
            numeriGenerati.push(randomInteger(1, 100));
            if(i > numero - (visualizzati + 1)){
                msg += ` ${numeriGenerati[i]}`;
                if( i !== numero-1) msg += ',';
            }
        }
        resultEl.innerHTML = msg;
    }
})