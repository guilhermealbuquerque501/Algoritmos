function adicionarNoFinal(lista, elemento) {


    let nova_lista = [];

    console.log(`lista: ${lista}`);

    for (let i = 0; i < lista.length; i++) {

        nova_lista[i] = lista[i]

    }

    nova_lista[lista.length] = elemento;

    console.log(`Nova lista: ${lista}`);

    return nova_lista
}

// elemento = "ian"

// 0      1       2
//      lista = ['tom', 'bob' , 'dan' ]
// nova_lista = ['tom', 'bob' , 'dan' ]