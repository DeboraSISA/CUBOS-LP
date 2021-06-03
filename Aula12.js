//Operadores lógicos
const pessoa = {
    nome: "Débora",
    idade: 11,
    altura: 1.50,
    temPassaporte: false
};

// idade mínima = 12 
// altura mínima = 1.40

//if (pessoa.idade >= 12){
 //   if (pessoa.altura >= 1.40){
 //     console.log(`Que legal ${pessoa.nome}, você pode brincar. `);
 //   console.log("Divirta-se!");  
 //   }else {
//    console.log(`${pessoa.nome}, infelizmnte você não pode brincar por que não tem altura mínima`);
//}
//} else{
 //   console.log(`${pessoa.nome}, infelizmnte você não pode brincar por que não tem idade mínima.`)
//}  


if (pessoa.idade >= 12 && pessoa.altura >= 1.40){
    console.log(`Que legal ${pessoa.nome}, você pode brincar. `);
}else{
    console.log(`${pessoa.nome}, infelizmnte você não pode brincar.`)
}

// && -> e
// || -> ou
// ! -> negação

if (!pessoa.temPassaporte){
    console.log("Não pode Viajar");
} 