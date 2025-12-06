let newPromise = new Promise((resolve, reject) => {
  let dataRecieved = true

  if (dataRecieved) {
    resolve('Data Recieved')
  } else {
    reject('Data not Recieved')
  }
})

newPromise
  .then(message => {
    console.log('Success: ' + message)
    return 'Next Success ' + message
  })
  .then(newmessage => {
    console.log(newmessage)
  })
  .catch(error => {
    console.log('Error :' + error)
  })
  .finally(() => {
    console.log('This is End')
  })

//CallBacke Function

// function newFunction (sucessCallBack, errorCallBack) {
//   let dataRecieved = false

//   if (dataRecieved) {
//     sucessCallBack('Data Recieved')
//   } else {
//     errorCallBack('Data Not Recieved')
//   }
// }
// newFunction(
//   message => {
//     console.log(message)

//     newFunction(
//       nextMessage => {
//         console.log('Next Message' + nextMessage)
//       },
//       nextError => {
//         console.log('Next Error:' + nextError)
//       }
//     )
//   },

//   error => {
//     console.log(error)

//     newFunction(
//       nextMessage2 => {
//         console.log('Next ErrorData' + nextMessage2)
//       },
//       nextError1 => {
//         console.log('Next ErrorData r' + nextError1)
//       }
//     )
//   }
// )
