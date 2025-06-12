import './App.css';
import Home from './component/home';
import Hero from './component/Hero-Section';
import Flash from './component/Flash-Sale';
import Category from './component/Category';
import Month from './component/month';
import Music from './component/Music';
import Product from './component/Product';
import Arrival from './component/Arrival';
import Delivery from './component/Delivery';
import Footer from './component/Footer';
import SignUp from './component/signup/SignUp';
import Login from './component/login/Login';
import AboutUs from './component/About/AboutUs'; 
import Cart from './component/Cart/cart';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Contact from './component/Contact/Contact';
import Billing from './component/Billing/Billing';
import Account from './component/Account/Acount';
import Wishlist from './component/Wishlist/Wishlist';
import Products from './component/ProductList/Products';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/Billing" element={<Billing />} />
        <Route path ="/Account" element={<Account />}/>
        <Route path ="/Wishlist" element={<Wishlist/>}/>
        <Route path = "/Products" element={<Products/>}/>


        <Route path="/" element={
          <>
            <Home />
            <Hero />
            <Flash />
            <Category />
            <Month />
            <Music />
            <Product />
            <Arrival />
            <Delivery />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
