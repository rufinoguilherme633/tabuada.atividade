//let multiplicar = function(primeroMultiplicando, ultimoMultiplicando) {
    let multiplicar = function(primeroMultiplicando, ultimoMultiplicando, inicioMultiplicando,fimMultiplicando) {  
        let valorPrimeiro = Number(primeroMultiplicando);
        let valorUltimo = Number(ultimoMultiplicando);
        let resultado;
        let cont;
        let contPr = 0;
        let valor1 = Number(inicioMultiplicando)  ;
        let valor2 = Number(fimMultiplicando)  ;
    
        for (contPr = valorPrimeiro; contPr <= valorUltimo; contPr++) {
            // resultado = contPr
            // console.log(resultado)
            // for (let cont = 1; cont <= 3; cont++) {
            for (let cont =  valor1; cont <= valor2; cont++) {
                resultado = contPr * cont

               // console.log("TABUADA do " + contPr + "\n")
                
                console.log(contPr + " x " + cont + " = " + resultado)
                
                
            }
            
            console.log("----------------------------------------")
            
        }
        
    
    
    
    }
    
     //multiplicar(1, 4,1,10)
    
    module.exports = {
        multiplicar
    }