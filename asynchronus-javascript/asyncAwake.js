let newProject = new Promise((fullfilled, failure) => {
  let dataRecieved = true
  if (dataRecieved) {
    fullfilled('Data Recived Successfully')
  } else {
    failure('Data is Failure')
  }
})

let message = await newProject

console.log(message);

