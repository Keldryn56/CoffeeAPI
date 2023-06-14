import data from '../data/products.json' assert { type: "json" };

data.map(el => el.image = 'http://paul-virtual-machine:3000/assets/'+el.image)

const getProductList = (type) => type ? data.filter(el => el.type.includes(type)) : data
const getProduct = (productId) => data.filter(el => el.id == productId)

export {
    getProduct,
    getProductList
}