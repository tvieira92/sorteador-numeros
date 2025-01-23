document.querySelector(".sort-form").addEventListener("submit", (e) => {
  e.preventDefault()
  sortearNumeros().then(displayResults)
})

document.getElementById("btn-reset").addEventListener("click", () => {
  document.getElementById("form-container").style.display = "block"
  document.getElementById("result").style.display = "none"
})

function sortearNumeros() {
  return new Promise((resolve) => {
    const quantidade = Number.parseInt(document.getElementById("number").value)
    const de = Number.parseInt(document.getElementById("from").value)
    const ate = Number.parseInt(document.getElementById("to").value)
    const permitirRepetidos = document.getElementById("toggle").checked

    const numeros = []

    if (permitirRepetidos) {
      for (let i = 0; i < quantidade; i++) {
        const numero = Math.floor(Math.random() * (ate - de + 1)) + de
        numeros.push(numero)
      }
    } else {
      if (quantidade > ate - de + 1) {
        alert("A quantidade de números é maior que o intervalo disponível!")
        resolve([])
        return
      }

      while (numeros.length < quantidade) {
        const numero = Math.floor(Math.random() * (ate - de + 1)) + de
        if (!numeros.includes(numero)) {
          numeros.push(numero)
        }
      }
    }

    resolve(numeros)
  })
}

function displayResults(numbers) {
  const resultContainer = document.getElementById("result-numbers")
  resultContainer.innerHTML = ""

  numbers.forEach((number, index) => {
    const numberSquare = document.createElement("div")
    numberSquare.className = "number-square"

    const innerSquare = document.createElement("div")
    innerSquare.className = "number-square-inner"

    const frontFace = document.createElement("div")
    frontFace.className = "number-square-front"

    const backFace = document.createElement("div")
    backFace.className = "number-square-back"
    backFace.textContent = number

    innerSquare.appendChild(frontFace)
    innerSquare.appendChild(backFace)
    numberSquare.appendChild(innerSquare)

    resultContainer.appendChild(numberSquare)

    // Delay the start of each square's animation
    setTimeout(() => {
      innerSquare.style.animation = "spin 1s ease-out forwards"
    }, index * 200)
  })

  document.getElementById("form-container").style.display = "none"
  document.getElementById("result").style.display = "block"
}

