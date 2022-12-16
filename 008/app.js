function mostrar () {
    let n1= parseInt(document.getElementById('n1').value) 
    let n2= parseInt(document.getElementById('n2').value) 
    let soma= n1+ n2
   let sub= n1-n2
   let div= n1/n2
   let multi=n1*n2
    document.getElementById("resposta").innerHTML=soma+ " soma"
    document.getElementById("resposta2").innerHTML=sub + " subtração"
    document.getElementById("resposta3").innerHTML=div+" divisão"
    document.getElementById("resposta4").innerHTML= multi+" multiplicação"

}