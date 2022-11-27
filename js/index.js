
const dolarUsCompra = 164
const dolarUsVenta = 172


alert(`¡Hola y bienvenido(a) a United Exchange! \r\r Dolar oficial hoy: \r Compra: $${dolarUsCompra} \r Venta: $${dolarUsVenta}`)

const compraVenta = prompt("¿Usted quiere comprar o vender dolares?")
const montoIngresado = prompt(`Ingrese el monto que usted quiere ${compraVenta}`) 


function cotizardor(compraVenta, montoIngresado ) {
    if (compraVenta.toLocaleLowerCase() === "vender" && montoIngresado  >= 0) {
        return  "El total a recibir es: $" + montoIngresado * dolarUsCompra + " pesos argentinos"
    } else if (compraVenta.toLocaleLowerCase()  === "comprar" && montoIngresado >= 0) {
        return "El total a pager es: $" + montoIngresado * dolarUsVenta + " pesos argentinos"
    } else {
        return "Error: Por favor, ingrese un valor válido"
    }
}

console.log(cotizardor(compraVenta, montoIngresado))

