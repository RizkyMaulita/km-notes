/*
  lakukan
    1. `npm init` atau `npm init -y`
    2. npm install node-fetch
    3. copy "type": "module", ke dalam package.json
  
  Untuk push ke github
    1. buat file yang namanya .gitignore
    2. masukkan 'node_modules' ke dalam file tersebut, sesuaikan dengan structure folder kalian masing2
*/

import fetch from 'node-fetch';

// fetch('https://api.github.com/users/RizkyMaulita')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

const getUsername = async (username) => {
  try {
    if (!username) {
      return null
    }
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    if (data?.login) {
      return data
    } else {
      return 'Not Found'
    }
  } catch (error) {
    console.log('error')
    return error
  }
}
// getUsername('RizkyMaulitaa1234564')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

getUsername('')
  .then(data => console.log(data))
  .catch(err => console.log(err))