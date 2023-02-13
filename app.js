var matematica = require('./modulo/tabuada.js')

var readline = require('readline');
const tabuada = require('./modulo/tabuada');
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});






entradaDados.question('digite número inicial \n', function(numeroInicial) {
    let primeroMutiplicando = numeroInicial;
    //  if (primeroMutiplicando == '') {
    // console.log("Erro : é preciso responder essa pergunta ")
    // }
    entradaDados.question('Digite o número final \n', function(numeroFinal) {
        let ultimoMultiplicando = numeroFinal;
        //  if (ultimoMultiplicando == '') {
        // console.log("Erro : é preciso responder essa pergunta ")
        // }

        if (primeroMutiplicando == '' || ultimoMultiplicando == '') {
            console.log("Erro : é preciso preencher todos os campos ")
        } else if (primeroMutiplicando > 200 || ultimoMultiplicando < 2 || ultimoMultiplicando > 200) {
            console.log("O sistema só aceita números entre 0 e 200")
        }

        // console.log("*****************************************")
        // console.log("O sistema irá calcular do numero 1 até o 50")
        // console.log("*****************************************")

        let calcular = matematica.multiplicar(primeroMutiplicando, ultimoMultiplicando);





    })
})