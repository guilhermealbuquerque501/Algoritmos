function adicionarNoFinal(lista, elemento) {

    console.log(`FUI PRO JS - Lista: ${lista}`);

    let nova_lista = [];

    for (let i = 0; i < lista.length; i++) {
        nova_lista[i] = lista[i];

    }
    nova_lista[lista.length] = elemento;

    id_resultado.innerHTML = ` Nova lista: ${nova_lista}`;
    return nova_lista;
}

function removerDoFinal(lista) {

    let nova_lista = []
    for (let i = 0; i < lista.length; i++) {


        if (i != lista.length - 1) {
            nova_lista[i] = lista[i]
        }
    }

    id_resultado.innerHTML = ` Nova lista: ${nova_lista}`;

    return nova_lista;
}


function removerDoInicio(lista) {

    let nova_lista = []
    for (let i = 0; i < lista.length; i++) {

        if (i != 0) {

            nova_lista[i] = lista[i]

        }
    }

    id_resultado.innerHTML = ` Nova lista: ${nova_lista}`;

    return nova_lista;
}


function adicionarNoInicio(lista, elemento) {

    let nova_lista = []
    nova_lista[0] = elemento

    for (let i = 0; i < lista.length; i++) {

        nova_lista[i + 1] = lista[i]

    }


    id_resultado.innerHTML = ` Nova lista: ${nova_lista}`;

    return nova_lista;
}

function alterarLista(lista, indice, quantidade, elemento) {

    let nova_lista = []

    for (let i = 0; i < lista.length; i++) {


        if (i >= indice && i < (indice + quantidade)) {

            continue

        }

        else {
            nova_lista[i] = lista[i]
        }
    }
    nova_lista[indice] = elemento
    
    id_resultado.innerHTML = ` Nova lista: ${nova_lista}`;

    return nova_lista;
}