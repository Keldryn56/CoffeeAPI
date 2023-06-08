import data from '../data/products.json' assert { type: "json" };

const getProductList = () => data
const getProduct = (productId) => data.filter(el => el.id == productId)

export {
    getProduct,
    getProductList
}