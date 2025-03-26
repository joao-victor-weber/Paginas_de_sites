const db = require('./cnx');
const atualizar = async function (nomeNovo, nomeAntigo) {
    await db.connect()
    const troca = "update aluno set nome_alu=$1 where nome_alu=$2"
    await db.query(troca, [nomeNovo, nomeAntigo])
};
const uparnome = async function (nome) {
    await db.connect()
    const up = "INSERT INTO aluno (nome_alu) VALUES ($1)"
    await db.query(up, [nome])
};
const uparcurso = async function (curso) {
    await db.connect()
    const up = "INSERT INTO curso (nome_cur) VALUES ($1)"
    await db.query(up, [curso])
};
module.exports = { atualizar, uparnome, uparcurso };