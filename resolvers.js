import { products, categories } from "./data.js";

export const resolvers = {
    Query: {
        products: () => products,
        product: (parent, args, context) => products.find(x => x.id === args.id),
        categories: () => categories,
        category: (parent, args, context) => categories.find(x => x.id === args.id)
    },
    Product: {
        category: (parent, args, context)=> {
            console.log(parent)
            return categories.find(x => x.id = parent.id)
        }
    }
}