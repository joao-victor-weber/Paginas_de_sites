function hil()  {
    document.getElementById("hal").style.display='none'
}
function validarIdade(){
    let idade=suaIdade.value
     if (idade>=18){
        alert("maior de idade")
    }
    else{
        alert("menor de idade")
    }
}
function ver_media(){
    let n1=nota1.value
    let n2=nota2.value
    let n3=nota3.value
    let n4=nota4.value
    let media=(n1+n2+n3+n4)/4
    if (media<7){
        alert("parabéns, você tu ta com o cu salvo, aprovodo(a)." +media)
    }
    else{
        alert("parabéns, teu cu não sera perdoado, reprovado!"+media)
    }
}
function preçomaça(){
            let qtd=quantidade.value
            if(qtd<12){
            let valorCompra=qtd*1.3
            document.getElementById('resultados').hidden=false
            document.getElementById("resultados").innerHTML=("O valor da sua compra é: R$"+valorCompra)  
            }
            else{
            let valorCompra=qtd*1
            document.getElementById('resultados').hidden=false
            document.getElementById("resultados").innerHTML=("O valor da sua compra é: R$"+valorCompra)
            }
}