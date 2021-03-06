import { ApolloClient, InMemoryCache } from "@apollo/client";

const token= process.env.REACT_APP_APOLLO_TOKEN;
console.log('token', token);

const client = new ApolloClient({
  uri: "http://smart-meeting.herokuapp.com/graphql",
  // uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all'
   },
   watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
   }
  },
  headers: {
    token: token
  }
});

export default client;