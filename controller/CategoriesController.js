import data from '../data/categories.json' assert { type: "json" };

data.map(el => el.image = 'http://paul-virtual-machine:3000/assets/'+el.image)

const getCategoriesList = () => data

export {
    getCategoriesList,
}