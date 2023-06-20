import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

export function createApolloClient(): ApolloClient<unknown> {
  const httpLink = new HttpLink({
    uri: process.env.GRAPH_API_URL || "", // Replace with your GraphQL API endpoint
  });

  // Create an ApolloLink instance to modify the request headers
  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(
      ({ headers }: { headers: Record<string, string> }) => ({
        headers: {
          ...headers,
          "x-client-id": process.env.CHARGE_TRIP_PROJECT_ID || "",
          "x-app-id": process.env.CHARGE_TRIP_APP_ID || "",
        },
      })
    );

    return forward(operation);
  });

  const link = authLink.concat(httpLink);

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
}
