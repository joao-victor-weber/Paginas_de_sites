let nome=window.prompt("Qual é seu nome")
Document.write(`<h1>Olá ${nome} vamos calcular!<h1>`)
function cal(x, y, z) {
    let res1 = '';

    if (z === "+") {
        res1 = x + y;
    } else if (z === "-") {
        res1 = x - y;
    } else if (z === "*") {
        res1 = x * y;
    } else if (z === "/") {
        if (y !== 0) {
            res1 = x / y;
        } else {
            res1 = "Erro: Divisão por zero";
        }
    } else {
        res1 = "Operação inválida";
    }

    document.getElementById("res").innerHTML = "O resultado é " + res1;
    oculto();
}

function oculto() {
    const ospan = document.getElementById('res');
    if (ospan.textContent.trim() === '' || ospan.textContent.trim() === 'O resultado é ') {
        ospan.classList.add('o');
    } else {
        ospan.classList.remove('o');
    }
}

window.onload = oculto,no;
