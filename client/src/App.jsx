import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from ''

import Navbar from './components/Navbar';

const client = new ApolloClient({
  
})

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
