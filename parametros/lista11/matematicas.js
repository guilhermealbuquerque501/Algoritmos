function somar(num1, num2) {
    if (num1 == (null || undefined) || num2 == (null || undefined)) {
        console.log(`O argumento nâo pode ser nulo ou indefenido`);
        return;
    }
    else if (num1.typeOff !== "number") {
        console.log(`O argumento nâo pode ser nulo ou indefenido`);
        return;
    }
    else {
        soma = num1 = num2;
        return soma;
    }
}
    