//npm init -y --> packege.json
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const funcoes = require = require('./funcoes')

axios.get(url).then(response =>{
    const funcionarios = response.data //recebe o json
    const func = funcionarios
    .filter(funcoes.brasileiros)
    .filter(funcoes.mulheres)
    .reduce(funcoes.maiorSalario)
    console.log(func)
})
