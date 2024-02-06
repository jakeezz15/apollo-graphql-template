const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
//password: TDH6wby283XYJDF9
const MONGODB =
  'mongodb+srv://jakeezz15:TDH6wby283XYJDF9@cluster0.a635nzd.mongodb.net/?retryWrites=true&w=majority';

//Apollo Server

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Mongoose
// Connection to database
mongoose
  .connect(MONGODB) //  removed the decaprecated useNewUrlParser and useUnifiedTopology
  .then(() => {
    console.log('MongoDB Connection Successful');
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server Running at port: ${res.url}`);
  });
