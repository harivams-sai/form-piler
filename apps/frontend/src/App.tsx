import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';
import Dashboard from './screens/Dashboard';

const URL = `https://${process.env.REACT_APP_GRAPHQL_HOST}.onrender.com` || 'http://localhost:8000/';
const client = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Dashboard />
    </ApolloProvider>
  );
}

export default App;
