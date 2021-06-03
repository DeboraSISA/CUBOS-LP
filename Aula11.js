////Condicionais
const pessoa = {
    nome:"Débora",
    idade: 119,
    ehMaiorDeIdade: true,
    altura: 1.62
};

//let texto = pessoa.nome + " tem " + pessoa.idade;
//console.log(texto);

if (pessoa.idade < 18){
    console.log(pessoa.nome + " é menor de idade");
} else if (pessoa.idade < 60){
    console.log(`${pessoa.nome} é adulto`);
} else {
    console.log(`${pessoa.nome} é uma idosa de ${pessoa.idade} anos,`);
}

