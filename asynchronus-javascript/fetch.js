fetch('https://fakestoreapi.com/Users/sad')
  .then(response => {
    if (!response.ok) {
      throw new Error('data not Found')
    } else {
      return response.json()
    }
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error.message)
  })

async function fetchData () {

  try {

    let response = await fetch('https://fakestoreapi.com/Users')

    if (!response.ok) { 
      throw new Error('Data Not Found')
    }
    else{
        let data = await response.json()
        console.log(data[1])
    }
  } catch (error) {
    console.log(error.message)
  }
}fetchData()
