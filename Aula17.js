// Loops - outro tipo de for
const listaDeCompras = ["Arroz", "Batata", "Banana", "Farinha"];

for (let item of listaDeCompras) {
    console.log("Verificando item: " + item)
    if (item === "Banana"){
        console.log('Banana está na lista.');
        break;
    }
}