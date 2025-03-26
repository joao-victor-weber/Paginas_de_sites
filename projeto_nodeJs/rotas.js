const express=require('express')
const router=express.Router()
const aluno=require('./crud')

router.get('/',  (req, res)=>{
    res.send('Hello World')
})
router.get('/cal/:c/:d',  (req, res)=> {
    res.send('multiplicação ' + calculos.multiplicao(req.params.c,req.params.d))
})
router.get('/saiba-mais',  (req, res)=> {
    res.send('Algumas informações confidenciais')
})
router.get('/nome/:nomeUsuario', (req, res)=> {
    res.send('nome do caboco ' + req.params.nomeUsuario)
})
router.get("/home", (req, res)=> {
    res.sendFile(__dirname + '/index.html')
    const inEve=require('./insereORM',(req,res)=>(
        inEve(req.body.ev,req.body.ev_des)
        .then(()=>{})
        .catch((erro)=>{
            res.send('Erro'+erro)
        })
    ))
})

router.patch('/atualizaNome/:nome1/:nome2',function(req,res){
    aluno.atualizar(req.params.nome1,req.params.nome2)
    .then(function(){
        res.send('O nome atualizado')
    }).catch(function(erro){
        res.send('Erro sans dormiu de novo no trabalho!!'+erro)
    })
})
router.post('/upnome/:nome1',function(req,res){
    aluno.uparnome(req.params.nome1)
    .then(function(){
        res.send('O nome inserido')
    }).catch(function(erro){
        res.send('Erro sans dormiu de novo no trabalho!!'+erro)
    })
})
router.post('/upcurso/:curso1',function(req,res){
    aluno.uparcurso(req.params.curs1)
    .then(function(){
        res.send('Curso inserido')
    }).catch(function(erro){
        res.send('Erro sans dormiu de novo no trabalho!!'+erro)
    })
})
module.exports=router