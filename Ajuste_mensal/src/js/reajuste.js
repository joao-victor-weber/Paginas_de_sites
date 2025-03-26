function cal(){
    let rej1=  parseFloat(rej.value)
    let sal1 =  parseFloat(sal.value)
    let reaj = rej1/100
    let reaju = sal1*reaj
    let sali = sal1 + reaju
    document.getElementById("res").innerHTML=("Seu salário mes que vem sera de R$ "+sali)
}