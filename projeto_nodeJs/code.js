console.log("let's Go!")

const express = require('express')
const app = express()
const calculos = require('./operasao')
const rotas = require('./rotas')

app.use(express.urlencoded({extended:true}))
app.use(rotas)
app.listen(3000)