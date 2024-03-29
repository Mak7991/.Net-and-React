import { ApolloClient } from "apollo-client";
// import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { createUploadLink } from "apollo-upload-client";

const httpLink = createUploadLink({
  uri: process.env.REACT_APP_SERVER_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

// import { ApolloClient } from "apollo-client";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { RestLink } from "apollo-link-rest";

// // setup your `RestLink` with your endpoint
// const restLink = new RestLink({ uri: "http://10.2.0.201:8085/api/" });

// // setup your client
// const client = new ApolloClient({
//   link: restLink,
//   cache: new InMemoryCache(),
// });

// export default client;
