
//brasileiros
this.brasileiros = f => f.pais ==='Brazil'
//homens
this.homens = f => f.genero ==='M'
//salario maior
this.maiorSalario =(funcionario, funcionarioAtual)=>{
    return funcionario.salario > funcionarioAtual.salario ?  funcionario : funcionarioAtual
}
//salario menor
this.menorSalario =(funcionario, funcionarioAtual)=>{
    return funcionario.salario < funcionarioAtual.salario ?  funcionario : funcionarioAtual
}
this.funcao01 =function(parametro) {return 'esse eh um  '+parametro}