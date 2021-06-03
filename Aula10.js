//Condicionais
const pessoa = {
    nome:"Débora",
    idade: 9,
    ehMaiorDeIdade: true,
    altura: 1.62
};

if (pessoa.idade < 18){
    console.log("A pessoa é menor de idade");
} else if (pessoa.idade < 60){
    console.log('A pessoa é adulta');
} else {
    console.log("A pessoa é Idosa");
}

// >= (maior ou igual)
// <= (menor ou igual)
// > (maior que)
// < (menor que)
// != (diferente)
// == (igual)
// === (Verifica se é igual e o Tipo)
// !==