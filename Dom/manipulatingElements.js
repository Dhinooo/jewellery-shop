function manipulatingElement () {
  //   let newListElement = document.createElement('li')

  //   newListElement.innerText = '<a>Link</a>'
  //   newListElement.innerHTML = '<a>Link</a>'
  //   newListElement.textContent = '<a>Link</a>'

  //   console.log(newListElement)

  let newListElement = document.createElement('li')

  let input = document.querySelector('input')

  newListElement.innerText = input.value

  //   console.log(newListElement)

  let orderList = document.querySelector('ol')

//   orderList.append('Text Node',newListElement)

  // orderList.appendChild('Text Node',newListElement)
}
