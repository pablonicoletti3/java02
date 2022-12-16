function mostrar (){
    let nome= document.getElementById("nome").value 
    let telefone= document.getElementById("telefone").value
    let email= document.getElementById("email").value
    let cidade= document.getElementById("cidade").value

    document.getElementById("resposta").innerHTML=   nome+  telefone + email +  cidade
}

