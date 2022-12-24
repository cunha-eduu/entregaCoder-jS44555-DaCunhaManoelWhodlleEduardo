const formNewsletter = document.querySelector(".form-newsletter")
const inputNombre = document.querySelector("#input-nombre")
const inputEmail = document.querySelector("#input-email")

let newsletter = []


const newsletterAHTML = ( array ) => {
    const contenedorNotas = document.querySelector(".contenedor-newsLetter")

    const arrReducido = array.reduce( (acc, element) => {
        return acc + `
            <div class="mensaje__suscrito">
                <p>¡Felicitaciones! Usted ya es parte de la comunidad Uninted Exchange.</p>
            </div>
        `
    }, "")

    contenedorNotas.innerHTML = arrReducido
}

formNewsletter.onsubmit = ( event )  => {
    event.preventDefault()
    if(inputNombre.value === "" || inputEmail === ""){
        alert("Por favor, Complete los campos para poder enviar el formulario")
    } else {
        newsletter.push({
            nombre: inputNombre.value,
            email: inputEmail.value
        })
        formNewsletter.reset()
        formNewsletter.style.display = "none"
        newsletterAHTML(newsletter)
    }
}



