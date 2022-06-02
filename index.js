import { ApolloServer, gql } from "apollo-server";
import {typeDefs} from './schema.js';
import { resolvers } from "./resolvers.js";
import { products, categories, reviews } from "./data.js";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        products,
        categories,
        reviews
    }
});

server.listen().then(({url})=>{
    console.log(`Server running at ${url}`)
})