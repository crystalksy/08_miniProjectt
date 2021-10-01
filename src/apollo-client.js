import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";


// kita dapat apolo ini karna copy di web apolo graph ql
const client = new ApolloClient({
    uri: 'https://nextgraphqll.hasura.app/v1/graphql',   ///// ini bisa di copy dari hasura yg kita buat 
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret' : 
        '0Glzwk1kcolGsHBthNNsXE7biklNl16O6RN7O4SxsurExa49DEaLtl1Iw8SR2Ray',
        // kenapa kita buat header? karna kita harus punya output gaiss.. jadi header itu kek ngebantu buat ngeluarin si outputnya itu
        // kaya password gtu
    },
  });
  

  export default client;