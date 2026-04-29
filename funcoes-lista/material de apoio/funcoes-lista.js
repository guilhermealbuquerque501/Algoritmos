function adicionarNoFinal(lista, elemento){

    console.log(`FUI PRO JS - Lista: ${lista}`);
    
    let nova_lista = [];

    for (let i = 0; i < lista.length; i++) {
        nova_lista[i] = lista[i];        
    
    }
    nova_lista[lista.length] = elemento;  

    console.log(`FUI PRO JS - Nova lista: ${nova_lista}`);
    return nova_lista;
}

