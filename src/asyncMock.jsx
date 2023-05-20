const products = [
    {
        id: '1',
        name: 'Mesa de roble',
        price: 50000,
        category: 'living',
        img: 'data:image/jpeg;base64,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',
        stock: 4,
        description: 'Mesa de roble macizo importada'
    },
    {
        id: '2',
        name: 'Silla de roble',
        price: 22000,
        category: 'living',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZBqWuuMVhc6TH2JahYqSgBR5a28XevHe7g&usqp=CAU',
        stock: 7,
        description: 'Silla de roble macizo importada'
    },
    {
        id: '3',
        name: 'Silla de pino',
        price: 5000,
        category: 'cocina',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/912/364/products/silla-de-madera-de-pino-rosario-hindu1-28741c3ea6d8fb617516003122585531-640-0.jpg',
        stock: 3,
        description: 'Silla de pino cepillado'
    },
]

export const getProducts = (prop) => {
    return new Promise((resolve) => {
            resolve(products)
    })
    
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
            resolve(products.find(product => product.id === productId))
    })
}

export const getProductsByCategory = (productCategory) => {

    return new Promise((resolve) => {
        resolve(products.filter(product => product.category === productCategory))
    })
}