import './App.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './routes';
import { CartProvider } from "react-use-cart";
import {BACKEND_URL} from './Helpers'

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
  } from "@apollo/client";
import Navbar from './Component/Navbar';
import '@brainhubeu/react-carousel/lib/style.css';
import Category from './Component/Category';


  const client = new ApolloClient({
    uri: `${BACKEND_URL}/graphql`,
    cache: new InMemoryCache()
  });


   const Routes = () =>{
     const element =  useRoutes(routes)
     return(
       <>
       <Navbar/>
       <Category />
        {element}
       </>
     )
   }

function App() {
  return (
    <div className="App">
      <BrowserRouter><CartProvider>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
      </CartProvider></BrowserRouter>
    </div>
  );
}


export default App;
