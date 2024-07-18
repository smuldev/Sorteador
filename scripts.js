const button = document.querySelector('.button')

function generateNumber() {


  const valueCircle = document.querySelector('.valor')
  const min = Math.ceil(document.querySelector('.input-min').value)
  const max = Math.floor(document.querySelector('.input-max').value)
  const circle = document.querySelector('.circle')

  if (min >= max) {
    alert("O Valor máximo precisa ser MAIOR que o mínimo!")

  } else {
    const result = Math.floor(Math.random() * (max - min + 1) + min);

    circle.style.display = 'flex';
    valueCircle.innerText = (result)
  }
}

button.addEventListener('click', generateNumber)

