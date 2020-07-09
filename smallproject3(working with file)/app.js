const fs = require('fs')
const funcionarios = __dirname + '/funcionarios.json'
const caminho = __dirname + '/arquivo.txt'
const funcoes = require('./funcoes')
const chines = []
const br = []
//const conteudoBr = require('./brasileiros.json')

fs.readFile(funcionarios, 'utf-8', (err, conteudo) => {//indicao para arquivo
    const objDeFuncionarios = JSON.parse(conteudo) //transforma o arquivo json em obj
    br.push.apply(br, Object.values(objDeFuncionarios.filter(funcoes.brazil)))//passa o array do json para o 
    chines.push.apply(chines, Object.values(objDeFuncionarios.filter(funcoes.china)))
  //  console.log(` mulheres brasileiras ${br.filter(funcoes.feminino).length}`)
//console.log(typeof conteudo)//string
})  

fs.readdir(__dirname,(err,arquivos)=>{//ler pastas
    //console.log('conteudo da pasta...')
   // console.log(arquivos)
})
const conteudoDoArquivo = fs.readFileSync(caminho,'utf-8')
console.log(conteudoDoArquivo)

const config = require('./funcionarios.json')//melhor para json
//console.log(Object.values(config).filter(funcoes.brazil).length)
//console.log(typeof config)
const ConteudoEscreve_brasil = Object.values(config).filter(funcoes.brazil)
const ConteudoEscreve_china = Object.values(config).filter(funcoes.china)

//escrever arquivo
fs.writeFile(__dirname + '/brasileiros.json',JSON.stringify(ConteudoEscreve_brasil), err =>{//caminho  e conteudo
    console.log(err || "arquivo salvo")
})
fs.writeFile(__dirname + '/chineses.json',JSON.stringify(ConteudoEscreve_china), err =>{
    console.log(err || "arquivo salvo")
})






