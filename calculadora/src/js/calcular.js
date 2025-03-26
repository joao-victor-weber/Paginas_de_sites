function cal(x,y,z){
if(z=="+"){ let res1=x+y
document.getElementById("res").innerHTML=("O resultado é "+res1)}
else if(z=="-"){ let res1=x-y
    document.getElementById("res").innerHTML=("O resultado é "+res1)}
    else if(z=="*"){ let res1=x*y
        document.getElementById("res").innerHTML=("O resultado é "+res1)} 
        else if(z=="/"){ let res1=x/y
            document.getElementById("res").innerHTML=("O resultado é "+res1)}
            
}
function call(){
    document.body.style.backgroundColor="red"
}
function caal(){
    document.body.style.backgroundColor="white"
}
function img0(){
    document.getElementById("img").src="img2.jfif"
}
function img2(){
    document.getElementById("img").src="img1.jfif"
}