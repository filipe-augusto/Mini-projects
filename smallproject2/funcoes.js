this.brasileiros = f => f.pais ="Brazil"
this.mulheres = f => f.genero = 'F'
this.maiorSalario = (funcionario, funcionarioAtual)=>{
    return funcionario.salario >funcionarioAtual.salario ? funcionario : funcionarioAtual 
}