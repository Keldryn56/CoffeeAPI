import {getProductList, getProduct} from './controller/ProductController.js'
import { ReviewsList } from './controller/ReviewsController.js';
import express from 'express' 

const app = express();

app.use(express.json());

app.get('/products', (req, res) => {
    res.json(getProductList())
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

export default app

