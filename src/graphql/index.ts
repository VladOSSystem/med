import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://one-check-orchestrator-staging.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});