import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import Signup from './components/Signup/Signup';
import About from './components/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Blogs from './components/Blogs/Blogs';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderPage from './components/OrderPage/OrderPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        <Route path="/checkout/:id" element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
        <Route path="/order" element={<RequireAuth><OrderPage></OrderPage></RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/inventory/:id" element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>

      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
