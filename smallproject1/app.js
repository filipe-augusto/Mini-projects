//busca de um arquivo json 

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const filtros = require('./filtros')

axios.get(url).then(response => {
    const funcionarios = response.data//recebe json
    const func = funcionarios
        .filter(filtros.homens)  //filtra os homens
        .filter(filtros.brasileiros) //filtra os br
    let menor = JSON.stringify(func.reduce(filtros.menorSalario))//aplica o reduce para reduzir o array para o elemento com menor salario
    let maior = JSON.stringify(func.reduce(filtros.maiorSalario))//transforma o objeto em string
    console.log(`Menor salario: ${menor}`)//menor salario
    console.log(`Maior salario: ${maior}`)//maior salario
})

