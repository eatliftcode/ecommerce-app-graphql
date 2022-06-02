

export const resolvers = {
    Query: {
        products: (parent, args, context) => context.products,
        product: (parent, args, context) => context.products.find(x => x.id === args.id),
        categories: (parent, args, context) => context.categories,
        category: (parent, args, context) => context.categories.find(x => x.id === args.id)
    },
    Product: {
        category: (parent, args, context)=> {
            return context.categories.find(x => x.id === parent.id)
        },
        reviews: ({id}, args, {reviews}) =>{
            return reviews.filter(review => review.productId === id)
        }
    },
    Category: {
        products: (parent, args, context)=> {
            return context.products.filter(x => x.id === parent.id)
        }
    }
}