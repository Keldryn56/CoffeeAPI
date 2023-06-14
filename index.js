import {getProductList, getProduct} from './controller/ProductController.js'
import { getCategoriesList } from './controller/CategoriesController.js';
import { ReviewsList } from './controller/ReviewsController.js';
import getStores from './controller/StoreController.js';
import express from 'express' 

import path from 'path'; 
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

app.get('/stores', (req, res) => {
    res.json(getStores())
});
app.get('/products', (req, res) => {
    let type = req.query.type || null
    const products = getProductList(type)
    res.json(products)
});
app.get('/categories', (req, res) => {
    const categories = getCategoriesList()
    res.json(categories)
});
app.get('/products/:productId', (req, res) => {
    res.json(getProduct(req.params.productId))
});
app.get('/products/:productId/reviews', (req, res) => {
    const reviews = ReviewsList.filter(req.params.productId)
    res.json(reviews.reviews)
});
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
app.get('/assets/:url', (req, res) => {
    res.sendFile(__dirname+'/assets/'+req.params.url);
});

export default app

