import { Provider } from "react-redux";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Account from './routes/account/Account';
import Cart from "./routes/cart/Cart";
import Catalog from './routes/catalog/Catalog';
import ProductPage from './routes/catalog/ProductPage';
import Home from './routes/home/Home';
import NotFound from './routes/layout/NotFound';
import Login from './routes/login/Login';
import Register from './routes/login/Register';
import Root from "./routes/root/Root";
import ThankYou from "./routes/thankyou/ThankYou";
import { store } from "./store";
import { bootstrapShopify } from "./utils/shopify/shopifyInit";




const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Root />} path='/' errorElement={<NotFound/>}>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />   
        <Route path="/catalog/product/:id" element={<ProductPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/account' element={<Account />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/thankyou' element={<ThankYou />} />
      </Route>
    )
  );

function App() {
  bootstrapShopify()
  return (
    <Provider store={store} >
            <RouterProvider router={router} />
    </Provider>
  );
}
export default App;