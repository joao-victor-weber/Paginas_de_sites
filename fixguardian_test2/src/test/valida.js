function vaNome(nome) {
    if (!nome || typeof nome !== "string" || nome.trim().length < 3) {
        return false;
    }
    return true;
}
function vaEmail(email) {
    const regex = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function vaIdade(idade) {
    if (typeof idade !== "number" || idade < 18 || idade > 100) {
        return false;
    }
    return true;
}
module.exports = { vaNome, vaEmail, vaIdade };