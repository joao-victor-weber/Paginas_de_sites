
function com(){
    let date = new Date()
    let date1= date.getFullYear()
    let ano = data1.value - data.value
   let Date1 = data.value
    if(Date1>=date1){
        document.getElementById("cd").innerHTML=("Ano Invalido")
    }
   else if(ano>=16){
        document.getElementById("cd").innerHTML=("Você esta aprovado para votar esse ano.")
    }
    else{
        document.getElementById("cd").innerHTML=("Vecê não tem idade o suficiente para votar esse ano.")
    }
   
}
setTimeout(function atualiza(){
    let data2=new Date()
    let dia1=data2.getDay()
    let mes1=data2.getMonth()
    let ano1=data2.getFullYear()
    document.getElementById('l1').hidden=false
    document.getElementById('l2').hidden=false
    document.getElementById('l3').hidden=false
    document.getElementById("dia").innerHTML=(dia1)
    document.getElementById("mes").innerHTML=(mes1)
    document.getElementById("ano").innerHTML=(ano1)
},5000)
  setInterval(function relogio(){
    let data=new Date()
    let hora=data.getHours()
    let minutos=data.getMinutes()
    let segundos=data.getSeconds()
    document.getElementById("r1").innerHTML=hora+":"+minutos+":"+segundos
  },1000 )