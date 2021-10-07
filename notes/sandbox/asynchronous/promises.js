function janji (ditepatin) { // cara pembuatan function berbasis asynchronous
  return new Promise(function (resolve, reject) {
    if (ditepatin === false) {
      reject('Gak di tepatin')
    } else {
      if ( ditepatin === true) {
        // return 'resolve == true'
        resolve('Resolve == true')
      }
      resolve('masuk di resolve ke dua')
    }
    reject('ini di reject yang terakhir')
  })
}

// const ditepatin = true
// // console.log(janji(ditepatin))
// // cara memanggil function asynchronous dengan promises
janji(ditepatin)
  .then(value => {
    console.log(value)
    const ditepatin2 = 'true'
    // return janji(ditepatin2)
    // janji(ditepatin2)
    //   .then(value2 => console.log('value kedua =>', value2))
    //   .catch(err => console.log(err))
  }) // kalau proses nya berhasil
  // .then(value2 => console.log('value kedua =>', value2))
  .catch(err => console.log(err)) // kalau prosesnya error
  .finally(() => console.log('finally di jalankan '))

(async () => {
  try {
    const resolve = await janji(false)
    console.log(resolve)
  } catch (err) {
    console.log(err)
  }
})()