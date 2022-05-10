import Home from './Pages/Home' 
import Login from './Pages/Login'
import SignUp from './Pages/Signup'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import ProductByCategory from './Pages/ProductByCategory'

 const routes = [
   {path: "/",element: <Home />},
   {path: "/login",element: <Login />},
   {path: "/signUp",element: <SignUp />},
   {path: "/product/:pid" , element: <Product/>}, 
   {path: "/cart" , element: <Cart/>}, 
   {path: "/category/:cid" , element: <ProductByCategory/>}, 
 ]
 export default routes;