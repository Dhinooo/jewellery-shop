//Parent

function traversingParent () {
  let getParent = document.querySelector('.child1')

  console.log(getParent.parentElement)

  console.log(getParent.parentNode)

  let getParent1 = document.querySelector('html')

  console.log(getParent1.parentElement)

  console.log(getParent1.parentNode)
}

//Child

function selectChild () {
  let getChild = document.querySelector('.parent')

  console.log(getChild)
  console.log(getChild.childElementCount)
  console.log(getChild.childNodes)
  console.log(getChild.children)
  console.log(getChild.firstChild)
  console.log(getChild.firstElementChild)
  console.log(getChild.lastChild)
  console.log(getChild.lastElementChild)
}
// selectChild()

//Siblings

function selectSiblings () {
  let getsiblings = document.querySelector('.child1')

  console.log(getsiblings)

  console.log(getsiblings.nextSibling)
  console.log(getsiblings.nextElementSibling)
  console.log(getsiblings.previousSibling)
  console.log(getsiblings.previousElementSibling)
}
