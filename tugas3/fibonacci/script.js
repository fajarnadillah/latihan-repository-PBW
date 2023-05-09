function fibonacci(number){
    let fibonaccis = [];

    for (let i = 0; i < number; i++){
        if(i === 0 || i === 1) fibonaccis.push(i);

        if(i > 1) fibonaccis[i] = fibonaccis[i-1] + fibonaccis[i-2];
    }
    return fibonaccis.join(', ');
}

console.log(fibonacci(10));