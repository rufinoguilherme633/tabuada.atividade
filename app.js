var matematica = require('./modulo/tabuada.js')

var readline = require('readline');
const tabuada = require('./modulo/tabuada');
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});






entradaDados.question('digite tabuaada inicial \n', function(numeroInicial) {
    let primeroMutiplicando = numeroInicial;
    //  if (primeroMutiplicando == '') {
    // console.log("Erro : é preciso responder essa pergunta ")
    // }

    if (isNaN(primeroMutiplicando)) {
        console.log("É necessario que este campo seja um número")
        process.exit();
    }else if (primeroMutiplicando == 0) {
        console.log("o número 0 não é permitdo")
        process.exit();
    }
    entradaDados.question('Digite o tabuada final \n', function(numeroFinal) {
        let ultimoMultiplicando = numeroFinal;
        //  if (ultimoMultiplicando == '') {
        // console.log("Erro : é preciso responder essa pergunta ")
        // }
        if (isNaN(ultimoMultiplicando)) {
            console.log("É necessario que este campo seja um número")
            process.exit();
        }

        if (primeroMutiplicando == '' || ultimoMultiplicando == '') {
            console.log("Erro : é preciso preencher todos os campos ")
            process.exit();
        } else if ( primeroMutiplicando < 2||primeroMutiplicando > 200 || ultimoMultiplicando < 2 || ultimoMultiplicando > 200) {
            console.log("O sistema só aceita números entre 2 e 200")
            process.exit();
        }

        // console.log("*****************************************")
        // console.log("O sistema irá calcular do numero 1 até o 50")
        // console.log("*****************************************")

       entradaDados.question('Digite o começo da tabuada\n' ,function(inicioTabuada) {
           let tabuadaInicio = inicioTabuada;

           if (tabuadaInicio < 1 || tabuadaInicio > 50) {
            console.log("O sistema so aceita o numeros entre 1 e 50")
            process.exit();
        }

        
           entradaDados.question('Digite o fim da tabuada\n' ,function(fimTabuada) {
            let tabuadafim = fimTabuada;
            if (isNaN(tabuadafim)) {
                console.log("É necessario que este campo seja um número")
                process.exit();
            }

            if (tabuadaInicio == '' || tabuadafim == '') {
                console.log("Erro : é preciso preencher todos os campos ")
            process.exit();
            }   else if (isNaN(inicioTabuada)) {
                console.log("É necessario que este campo seja um número")
                process.exit();
            }  else {
                if (tabuadafim < 1 || tabuadafim > 50) {
                    console.log("O sistema so aceita o numeros entre 1 e 50")
                    process.exit();
                } else {
                    let calcular = matematica.multiplicar(primeroMutiplicando, ultimoMultiplicando, tabuadaInicio,tabuadafim);
                    process.exit();
                   
                }
            }

           
            
             
        })

       })

    })
})