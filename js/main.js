//Mensaje de bienvenida updated

const mensajeBienvenida = document.querySelector(".principal__h2")
mensajeBienvenida.innerHTML = "¡Hola y bienvenido(a) a United Exchange! Aqui usted puede cambiar DOLAR, EURO o REAL"

//Cotizadora

let cotizadora = document.querySelector(".boton__cotizar")

cotizadora.onclick = ( event )  => {
  event.preventDefault()
  var elegirMoneda = prompt("¿Qué moneda usted quiere cambiar?\rDOLAR, EURO o REAL").toLocaleLowerCase();

  switch (elegirMoneda) {
    case "dolar":
      alert("Dolar oficial - Compra: $164  |  Venta: $172");
      break;
    case "euro":
      alert("Euro oficial hoy - Compra: $178  |  Venta: $179");
      break;
    case "real":
      alert("Real oficial - Compra: $28  |  Venta: $32");
      break;
    default:
      alert("Error: Por favor, ingrese DOLAR, EURO o REAL");
      var elegirMoneda = prompt("¿Qué moneda usted quiere cambiar?").toLocaleLowerCase();
      break;
  }


  const compraVenta = prompt(
    `¿Usted quiere comprar o vender ${elegirMoneda}?`
  ).toLocaleLowerCase();

  const montoIngresado = prompt(
    `Ingrese el monto en ${elegirMoneda} que usted quiere ${compraVenta}`
  );

  const tipoMonedaArray = [
    {
      tipoMoneda: "dolar",
      dolarUsCompra: 164,
      dolarUsVenta: 172,
      tipoMoneda: "euro",
      euroEuCompra: 178,
      euroEuVenta: 179,
      tipoMoneda: "real",
      realBrCompra: 28,
      realBrVenta: 32,
    },
  ];


  function cotizador(array) {
    for (let i = 0; i < array.length; i++) {
      //DOLAR
      if (
        compraVenta === "vender" &&
        montoIngresado >= 0 &&
        elegirMoneda === "dolar"
      ) {
        return (
          "El total a recibir es: $" +
          montoIngresado * tipoMonedaArray[i].dolarUsCompra +
          " pesos argentinos"
        );
      } else if (
        compraVenta === "comprar" &&
        montoIngresado >= 0 &&
        elegirMoneda === "dolar"
      ) {
        return (
          "El total a pagar es: $" +
          montoIngresado * tipoMonedaArray[i].dolarUsVenta +
          " pesos argentinos"
        );
      }

      //EURO
      else if (
        compraVenta === "vender" &&
        montoIngresado >= 0 &&
        elegirMoneda === "euro"
      ) {
        return (
          "El total a recibir es: $" +
          montoIngresado * tipoMonedaArray[i].euroEuCompra +
          " pesos argentinos"
        );
      } else if (
        compraVenta === "comprar" &&
        montoIngresado >= 0 &&
        elegirMoneda === "euro"
      ) {
        return (
          "El total a pagar es: $" +
          montoIngresado * tipoMonedaArray[i].euroEuVenta +
          " pesos argentinos"
        );
      }
      //REAL
      else if (
        compraVenta === "vender" &&
        montoIngresado >= 0 &&
        elegirMoneda === "real"
      ) {
        return (
          "El total a recibir es: $" +
          montoIngresado * tipoMonedaArray[i].realBrCompra +
          " pesos argentinos"
        );
      } else if (
        compraVenta === "comprar" &&
        montoIngresado >= 0 &&
        elegirMoneda === "real"
      ) {
        return (
          "El total a pagar es: $" +
          montoIngresado * tipoMonedaArray[i].realBrVenta +
          " pesos argentinos"
        );
      } else {
        return "Error: Por favor, ingrese un valor válido";
      }
    }
  }

  alert(cotizador(compraVenta, montoIngresado));
}