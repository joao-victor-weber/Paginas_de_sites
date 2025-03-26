function env(){
let win1= yuri.value
let win2= yaoi.value
if(win1==0 && win2==0){document.getElementById("res").innerHTML=("Empate! Não ouvi acertos")}
else if (win1<win2){document.getElementById("res").innerHTML=("Vitoria o time yaoi ganhou de acertos "+win1+" à "+win2+" acertos")}
else if (win1>win2){document.getElementById("res").innerHTML=("Vitoria o time yuri ganhou de acertos "+win1+" à "+win2+" acertos")}
else if (win1=win2){document.getElementById("res").innerHTML=("Empate! De acertos "+win1+" à "+win2+"acertos")}
}