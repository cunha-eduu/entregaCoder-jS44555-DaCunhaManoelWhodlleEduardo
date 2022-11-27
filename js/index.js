

const dolarUsVenta = 172
const dolarUsCompra = 164

const compraVenta = prompt("¿Usted quiere comprar o vender dolares?")
const montoIngresado = prompt("Ingrese el monto que usted quiere " + compraVenta) 


function cotizardor(compraVenta, montoIngresado ) {
    if (compraVenta.toLocaleLowerCase() == "vender" && montoIngresado  >= 0) {
        return  "El total a recibir es: AR$" + montoIngresado * dolarUsCompra + " (Pesos argentinos)"
    } else if (compraVenta.toLocaleLowerCase()  == "comprar" && montoIngresado >= 0) {
        return "El total a pager es: AR$" + montoIngresado * dolarUsVenta + " (Pesos argentinos)"
    } else {
        return "Error: Por favor, ingrese un valor válido"
    }
}

console.log(cotizardor(compraVenta, montoIngresado))

