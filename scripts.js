const form = document.querySelector("form")


function sortear() {
   const selectNum = Number(document.querySelector('#number').value)
   

   const selectFrom = Number(document.querySelector('#from').value)
   

   const selectTo = Number(document.querySelector('#to').value)


   const resultado = Math.floor(Math.random() * (selectFrom - selectTo + 1)) + selectFrom
   console.log(resultado)

   // Gerar um elemento HTML dentro do HTML existente
   
}


form.onclick = (event) => {
    event.preventDefault()
}

