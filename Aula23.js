





function imprimirValorDoDesconto(valorDaCompra, hora, cupom){ 
    if (cupom === "RANGOBARATO"){
        if(hora >= 12 && hora < 14){

        } else{
            console.log("Esse cupom não é válido este horário.")
        }

    } else{
        console.log("NÃO POSSUI NENHUM CUPOM APLICÁVEL")
    }
}

imprimirValorDoDesconto(150, 13, "RANGOBARATO");