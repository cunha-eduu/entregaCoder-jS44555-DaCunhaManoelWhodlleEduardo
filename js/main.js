alert(`¡Hola y bienvenido(a) a United Exchange! \r\r Dolar oficial hoy - Compra: $164  |  Venta: $172\r\r Real oficial hoy - Compra: $28  |  Venta: $32\r\r Euro oficial hoy - Compra: $178  |  Venta: $179`)

const elegirMoneda = prompt("¿Qué moneda usted quiere cambiar?")
const compraVenta = prompt(`¿Usted quiere comprar o vender ${elegirMoneda}?`)
const montoIngresado = prompt(`Ingrese el monto en ${elegirMoneda} que usted quiere ${compraVenta}`) 

const tipoMonedaArray = [
    {
        tipoMoneda: "dolar",
        dolarUsCompra: 164,
        dolarUsVenta: 172
    },
    {
        tipoMoneda: "real",
        realBrCompra: 28,
        realBrVenta: 32
    },
    {
        tipoMoneda: "euro",
        euroEuCompra: 178,
        euroEuVenta: 179
    },

]


for (let i = 0; i < tipoMonedaArray.length; i++) {
    
    function cotizador(compraVenta, montoIngresado) {

        //DOLAR
        if (compraVenta.toLocaleLowerCase() === "vender" && montoIngresado  >= 0 && elegirMoneda.toLocaleLowerCase() === "dolar") {
            return  "El total a recibir es: $" + montoIngresado * tipoMonedaArray[i].dolarUsCompra + " pesos argentinos"
        } else if (compraVenta.toLocaleLowerCase()  === "comprar" && montoIngresado >= 0 &&  elegirMoneda.toLocaleLowerCase() === "dolar") {
            return "El total a pagar es: $" + montoIngresado * tipoMonedaArray[i].dolarUsVenta + " pesos argentinos"
        }  
        
      //REAL        
        else if (compraVenta.toLocaleLowerCase() === "vender" && montoIngresado  >= 0 &&  elegirMoneda.toLocaleLowerCase() === "real") {
            return  "El total a recibir es: $" + montoIngresado * tipoMonedaArray[i].realBrCompra + " pesos argentinos"
        } else if (compraVenta.toLocaleLowerCase()  === "comprar" && montoIngresado >= 0 &&  elegirMoneda.toLocaleLowerCase() === "real") {
            return "El total a pagar es: $" + montoIngresado * tipoMonedaArray[i].realBrVenta + " pesos argentinos"
        }
        
        //EURO        
          else if (compraVenta.toLocaleLowerCase() === "vender" && montoIngresado  >= 0 &&  elegirMoneda.toLocaleLowerCase() === "euro") {
            return  "El total a recibir es: $" + montoIngresado * tipoMonedaArray[i].euroEuCompra + " pesos argentinos"
        } else if (compraVenta.toLocaleLowerCase()  === "comprar" && montoIngresado >= 0 &&  elegirMoneda.toLocaleLowerCase() === "euro") {
            return "El total a pagar es: $" + montoIngresado * tipoMonedaArray[i].euroEuVenta + " pesos argentinos"
        }
        else {
            return "Error: Por favor, ingrese un valor válido"
        }


    }

    if (elegirMoneda.toLocaleLowerCase() === tipoMonedaArray[i].tipoMoneda) {
        alert(cotizador(compraVenta, montoIngresado))
    } 
    
}


