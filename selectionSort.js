const livros = require('./listaLivros'); 

function selectionSort(lista) {
    for (let atual = 0; atual < lista.length - 1; atual++) {
        let maior = atual;

        for (let analise = atual + 1; analise < lista.length; analise++) {
       
            if (lista[analise].preco > lista[maior].preco) {
                maior = analise;
            }
        }

        let livroAtual = lista[atual];
        let livroMaiorPreco = lista[maior];

        lista[atual] = livroMaiorPreco;
        lista[maior] = livroAtual;
    }
    
    return lista;
}

module.exports = selectionSort;

console.log(livros)