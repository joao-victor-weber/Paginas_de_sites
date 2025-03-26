function preço(){
    let com=per.value
    if (com>=0 && com<=5){
        let Compra=com*15
        let des=Compra*(2/100)
        let total=Compra-des
        document.getElementById('resultados').hidden=false
        document.getElementById("resultados").innerHTML=("O valor da sua compra é: R$ "+total)
    }
    else if (com>5 && com<=10){
        let Compra=com*15
        let des=Compra*(3/100)
        let total=Compra-des
        document.getElementById('resultados').hidden=false
        document.getElementById("resultados").innerHTML=("O valor da sua compra é: R$ "+total)
    }
    else if (com>10){
        let Compra=com*15
        let des=Compra*(5/100)
        let total=Compra-des
        document.getElementById('resultados').hidden=false
        document.getElementById("resultados").innerHTML=("O valor da sua compra é: R$ "+total)
    }
    else{
        document.getElementById('resultados').hidden=false
        document.getElementById("resultados").innerHTML=("Erro,contidade invalida.")
    }
}
    function comverter(){

    document.getElementById("tex").innerHTML=(tex.innerHTML).toUpperCase()
}
function reconverter(){
    document.getElementById("tex").innerHTML=(tex.innerHTML).toLowerCase()
}

    