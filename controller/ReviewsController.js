import reviewsJson from '../data/reviews.json' assert { type: "json" };

export const ReviewsList = {
    reviews: reviewsJson,
    filter(productId){
        return {
            ...this,
            reviews: this.reviews.filter(el => el.productId == productId)
        }
    }
}