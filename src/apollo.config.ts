import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';

const makeApolloClient = () => {
  const link = new WebSocketLink({
    uri: `ws://localhost:8080/v1/graphql`,
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          // 'x-hasura-admin-secret': `${process.env.REACT_APP_HASURA_SECRET}`,
          'x-hasura-admin-secret': `oleg`,
        },
      },
    },
  });

  const cache = new InMemoryCache();
  const client = new ApolloClient({
    link,
    cache,
  });

  return client;
};

export default makeApolloClient;
