// const form = document.querySelector("form");

// let drawnedNumbers = [];

// const selectedNumber = document.querySelector("#number").value;
// const selectedFrom = document.querySelector("#from").value;
// const selectedTo = document.querySelector("#to").value;
// const noRepeat = document.querySelector("#toggle").checked;

// function drawnNumbers(from, to) {
//   const rangeNumber = to - from + 1;
//   const result = Math.floor(Math.random() * rangeNumber);
//   const response = result + from;

//   return response;
// }

// function validateExistRepeatedNumberAndReturn(selectedFrom, selectedTo) {
//   const number = drawnNumbers(selectedFrom, selectedTo);

//   if (!drawnedNumbers.includes(number)) {
//     return number;
//   }

//   return validateExistRepeatedNumberAndReturn(selectedFrom, selectedTo);
// }

// function sortear(selectedNumber, selectedFrom, selectedTo, noRepeat) {
//   for (let i = 0; i < selectedNumber; i++) {
//     if (noRepeat) {
//       const value = validateExistRepeatedNumberAndReturn(selectedFrom, selectedTo);
//       drawnedNumbers.push(value);
//     } else {
//       const repeatedNumber = drawnNumbers(selectedFrom, selectedTo);
//       drawnedNumbers.push(repeatedNumber);
//     }
//   }

//   console.log(drawnedNumbers);
// }

// form.onsubmit = (event) => {
//   event.preventDefault();

//   const selectedNumber = Number(document.querySelector("#number").value);
//   const selectedFrom = Number(document.querySelector("#from").value);
//   const selectedTo = Number(document.querySelector("#to").value);
//   const noRepeat = document.querySelector("#toggle").checked;

//   sortear(selectedNumber, selectedFrom, selectedTo, noRepeat);

//   drawnedNumbers = []

// };

document.querySelector(".sort-form").addEventListener("submit", (e) => {
  e.preventDefault()
  sortearNumeros()
})

document.getElementById("btn-reset").addEventListener("click", () => {
  document.getElementById("form-container").style.display = "block"
  document.getElementById("result").style.display = "none"
  document.querySelector(".sort-form").reset()
})

function sortearNumeros() {
  const qtdNumeros = Number.parseInt(document.getElementById("number").value)
  const min = Number.parseInt(document.getElementById("from").value)
  const max = Number.parseInt(document.getElementById("to").value)
  const naoRepetir = document.getElementById("toggle").checked

  if (isNaN(qtdNumeros) || isNaN(min) || isNaN(max) || qtdNumeros <= 0 || min > max) {
    alert("Por favor, preencha todos os campos corretamente.")
    return
  }

  const numerosSorteados = []
  while (numerosSorteados.length < qtdNumeros) {
    const numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min
    if (naoRepetir && numerosSorteados.includes(numAleatorio)) {
      continue
    }
    numerosSorteados.push(numAleatorio)
  }

  numerosSorteados.sort((a, b) => a - b)

  document.getElementById("form-container").style.display = "none"
  const resultDiv = document.getElementById("result")
  resultDiv.style.display = "flex"
  resultDiv.querySelector("p").textContent = numerosSorteados.join(" ")
}


