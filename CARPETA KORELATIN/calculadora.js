function sumar(num1,num2){
    var resultado = parseInt(num1) + parseInt(num2);
    alert("La suma de "+num1+" + "+num2+" es "+resultado);
}

function restar(num1,num2){
    var resultado = parseInt(num1) - parseInt(num2);
    alert("La suma de "+num1+" - "+num2+" es "+resultado);
}

function multiplicar(num1,num2){
    var resultado = parseInt(num1) * parseInt(num2);
    alert("La suma de "+num1+" * "+num2+" es "+resultado);
}

function dividir(num1,num2){
    var resultado = parseInt(num1) / parseInt(num2);
    alert("La suma de "+num1+" / "+num2+" es "+resultado);
}



do{
    var numero1 = prompt("Ingresa tu numero 1: ");
    var numero2 = prompt("Ingresa tu numero 2: ");
    var opcion = prompt("Ingresa tu opcion. 1. Sumar 2. Restar 3. Multiplicar 4. Dividir 5. Salir");

    if(opcion == 1){
        sumar(numero1,numero2);
    }
    else if(opcion == 2){
        restar(numero1,numero2);
    }
    else if(opcion==3){ 
        multiplicar(numero1,numero2);
    }
    else if(opcion==4){
        dividir(numero1,numero2);
    }
    else if(opcion==5){
        alert("Adiós");
    }
}while(opcion!=5);
