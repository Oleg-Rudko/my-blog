import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';

const makeApolloClient = () => {
  const link = new WebSocketLink({
    uri: `${process.env.REACT_APP_HASURA_HOST}`,
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          'x-hasura-admin-secret': `${process.env.REACT_APP_HASURA_SECRET}`,
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
