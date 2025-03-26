function env(){
let win1= Number(yuri.value)
let win2= Number(yaoi.value)
let winT= win1+win2
if(win1==0 && win2==0){document.getElementById("res").innerHTML=("Empate! Não ouvi acertos")}
else if (win1<win2){document.getElementById("res").innerHTML=(`Vitoria do time yaoi de ${winT} ships acertou ${win2}`)}
else if (win1>win2){document.getElementById("res").innerHTML=(`Vitoria do time yuri de ${winT} ships acertou ${win1}`)}
else if (win1=win2){document.getElementById("res").innerHTML=("Empate!")}
}