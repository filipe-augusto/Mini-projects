const porta = 3003
const express = require('express')//importa express
const bodyParser = require('body-parser')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))//se o padrao for urlencoded transformar em objeto
app.get('/produtos', (requisicao, reposta, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))//dentro de params tem o id que foi passado pelo url
})
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
app.put('/produtos/:id',(req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome:req.body.nome,
        preco:req.body.preco
    })
    res.send(produto)
})
})

app.listen(porta,()=>{
    console.log(`servidor executando na porta ${porta}`)
})