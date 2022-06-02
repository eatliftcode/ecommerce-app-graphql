export const resolvers = {
    Query: {
        products: (parent, {filter}, {products}) => {
            if(filter?.onSale){
                return products.filter(x => x.onSale)
            }
            return products
        },
        product: (parent, args, context) => context.products.find(x => x.id == args.id),
        categories: (parent, args, context) => context.categories,
        category: (parent, args, context) => context.categories.find(x => x.id == args.id)
    },
    Product: {
        category: (parent, args, context)=> {
            return context.categories.find(x => x.id == parent.id)
        },
        reviews: ({id}, args, {reviews}) =>{
            return reviews.filter(review => review.productId == id)
        }
    },
    Category: {
        products: (parent, {filter}, {products})=> {
            const filteredProducts =  products.filter(x => x.categoryId == parent.id)
            console.log(filteredProducts)
            if(filter?.onSale){
                return filteredProducts.filter(x => x.onSale)
            }
            return filteredProducts;
        }
    }
}