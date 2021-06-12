// Filtrar Elementos que Começam com a Letra "A"

const lista = ["Arroz", "Batata", "Manga", "Amora", "Macarrão", "Mamão", "abacate"];

const resultado = [];

for (let item of lista){
    if (item[0] === "A" || item[0] === "a"){
        resultado.push(item)
    }
}
console.log(resultado);

