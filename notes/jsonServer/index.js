const products = [
  {
    "id": 1,
    "name": "Gamis",
    "price": 250000,
    "description": "desc of gamis",
    "quantity": 50,
    "category": "fashion",
    "tags": ["fashion","dresses"]
  },
  {
    "id": 2,
    "name": "Rok",
    "price": 100000,
    "description": "desc of rok",
    "quantity": 50,
    "category": "fashion",
    "tags": ["fashion","bawahan"]
  },
  {
    "id": 3,
    "name": "Meja",
    "price": 500000,
    "description": "desc of table",
    "quantity": 50,
    "category": "furniture",
    "tags": ["furniture","dining room"]
  },
  {
    "id": 4,
    "name": "Sofa",
    "price": 1000000,
    "description": "desc of sofa",
    "quantity": 50,
    "category": "furniture",
    "tags": ["furniture","living room"]
  }
]

function filterTags (tag, category) {
  const result = []
  for (let i = 0; i < products.length; i++) {
    // console.log(products[i], '<<< ')
    // console.log('index ke- ', i)
    // console.log('---------')
    const product = products[i]
    if (product.category === category) {
      // console.log(product)
      // for (let j = 0; j < product.tags.length; j++) {
      //   if (product.tags[i] === tag) {
      //     result.push(product)
      //     break
      //   }
      // }
      const findTag = product.tags.find(tagProduct => tagProduct === tag)
      if (findTag) {
        result.push(product)
      }
    }
  }
  return result
}

console.log(filterTags('bawahan', 'fashion'))