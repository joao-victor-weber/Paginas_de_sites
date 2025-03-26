function vai(x) {
   switch (x) {
    case 1:
        if (window.confirm("Você gosta de back-end ?")==true) {
            window.location.href="./src/html/nd.html";
            
        }
        break;
        case 2:
            if (window.confirm("Você gosta de back-end ?")==true) {
            window.location.href="./src/html/re.html";
            }
            break;
   
    default:
        break;
   } 
}
function vol() {
    if (vo.checked) {
        window.location.href="../../index.html"
   }
    else{
        alert("cofirme o checkbox")
    }
}