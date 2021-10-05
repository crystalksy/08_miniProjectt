import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://nextgraphqll.hasura.app/v1/graphql',   ///// ini bisa di copy dari hasura yg kita buat 
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret' : 
        '0Glzwk1kcolGsHBthNNsXE7biklNl16O6RN7O4SxsurExa49DEaLtl1Iw8SR2Ray',
    },
  });
  
  export default client;

// import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { WebSocketLink } from '@apollo/client/link/ws';
// import { split, HttpLink } from '@apollo/client';
// import { getMainDefinition } from '@apollo/client/utilities';


// const httpLink = new HttpLink({
//   uri: 'https://nextgraphqll.hasura.app/v1/graphql',
//   headers: {
//     'x-hasura-admin-secret':
//       '0Glzwk1kcolGsHBthNNsXE7biklNl16O6RN7O4SxsurExa49DEaLtl1Iw8SR2Ray',
//   },
// });

// const wsLink = new WebSocketLink({
//   uri: 'wss://nextgraphqll.hasura.app/v1/graphql',
//   options: {
//     reconnect: true,
//     connectionParams: {
//       headers: {
//         'x-hasura-admin-secret':
//           '0Glzwk1kcolGsHBthNNsXE7biklNl16O6RN7O4SxsurExa49DEaLtl1Iw8SR2Ray',
//       },
//     }
//   }
// });

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink,
// );


// const client = new ApolloClient({
//   link: splitLink,
//   cache: new InMemoryCache(),
// });

// export default client;
