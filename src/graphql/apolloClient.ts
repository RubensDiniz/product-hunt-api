import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.producthunt.com/v2/api/graphql",
    headers: {
      Authorization: `Bearer VujMVFrz7tWCkiTXJMwViSzfdIH016l6GngZBIz02yo`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;