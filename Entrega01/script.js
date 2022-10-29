// VALOR TICKETS ///

let ticketNY = 1000
let ticketAmsterdam = 1200
let ticketBerlin = 1150
let ticketRio = 650

// PORCENTAJE IVA ///

let iva = 1.21

function repeatMenu() {
    let repetir = parseInt(prompt("Presion (1) para volver a cotizar (2) para finalizar (ingresar solo numeros)"))
    if (repetir == 1){
        loop();
    }
    else {
        alert("Gracias por usar nuestro servicio de venta de tickets")          
    }
}

function loop() {    

do{
    
    let opcion = parseInt(prompt("¿A que destino desea viajar? Presione (1) NY (2) AMSTERDAM (3) BERLIN (4) RIO DE JANEIRO (5) SALIR DEL MENU (ingresar solo numeros)"))

    if(opcion == 1){
        let ticketsQty = parseInt(prompt("Excelente has elegido NY. Por favor indica cuantos pasajes deseas comprar"))
        let total = ticketsQty * ticketNY
        alert ("Cantidad de tickets: " + ticketsQty + " | Valor por ticket: USD " + ticketNY + " | Subtotal sin IVA: USD " + total + " | Total con IVA: USD " + total * iva)
        repeatMenu();
    }

    else if(opcion == 2){
        let ticketsQty = parseInt(prompt("Excelente has elegido AMSTERDAM. Por favor indica cuantos pasajes deseas comprar"))
        let total = ticketsQty * ticketAmsterdam
        alert ("Cantidad de tickets: " + ticketsQty + " | Valor por ticket: USD " + ticketAmsterdam + " | Subtotal sin IVA: USD " + total + " | Total con IVA: USD " + total * iva)
        repeatMenu();
    }

    else if(opcion == 3){
        let ticketsQty = parseInt(prompt("Excelente has elegido BERLIN. Por favor indica cuantos pasajes deseas comprar"))
        let total = ticketsQty * ticketBerlin
        alert ("Cantidad de tickets: " + ticketsQty + " | Valor por ticket: USD " + ticketBerlin + " | Subtotal sin IVA: USD " + total + " | Total con IVA: USD " + total * iva)
        repeatMenu();
    }

    else if(opcion == 4){
        let ticketsQty = parseInt(prompt("Excelente has elegido RIO DE JANEIRO. Por favor indica cuantos pasajes deseas comprar"))
        let total = ticketsQty * ticketRio
        alert ("Cantidad de tickets: " + ticketsQty + " | Valor por ticket: USD " + ticketRio + " | Subtotal sin IVA: USD " + total + " | Total con IVA: USD " + total * iva)
        repeatMenu();
    }

    else if(opcion == 5){
        alert("Gracias por usar nuestro servicio de venta de tickets")
        break;
    }

    else{
        alert("La opción: " + opcion + " No es una opcion válida. Presione enter para comenzar nuevamente")
        loop();
    }
}

while (opcion !== 5)

}

loop();