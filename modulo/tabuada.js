let multiplicar = function(primeroMultiplicando, ultimoMultiplicando) {
    let valorPrimeiro = Number(primeroMultiplicando);
    let valorUltimo = Number(ultimoMultiplicando);
    let resultado;
    let cont = 0;
    let contPr = 0;




    for (contPr = valorPrimeiro; contPr <= valorUltimo; contPr++) {
        // resultado = contPr
        // console.log(resultado)

        for (let cont = 1; cont <= 3; cont++) {
            resultado = contPr * cont
            console.log(contPr + " x " + cont + " = " + resultado)
        }
        console.log("----------------------------------------")
    }



}

// multiplicar(1, 4)

module.exports = {
    multiplicar
}