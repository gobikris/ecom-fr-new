
import './App.css';
import {Routes,Route} from "react-router-dom"
import Homepage from './Components/Homepage';
import Contact from './Components/Contact';
import ProductDetail from './Components/Product.detail';
import Products from './Components/Products';
import Login from './Components/Login';
import Signup from './Components/Signup';
import CartPage from './Components/CartPage';
import Ahome from './Admin/A.home';
import ProductList from './Admin/productlist';
import { AddFoodList, AddProduct, EditProduct } from './Admin/addproduct';
import UserList from './Admin/users';
import Admin from './Admin/Admin';
import Credit from './Components/credit';
import FPassword from './Components/F.password';
import RPassword from './Components/R.password';
import MyOrders, { UserOrdersInfo } from './Components/userorder';
import Return from './Components/return';
import OrderList, { EditOrderList, OrderDetails, OrdersInfo } from './Admin/orderlist';


export default function App() {
  return (
    <div>
     
     <Routes>
        {/* this is pages */}

      <Route path="/" element={<Homepage />}/>
      {/* <Route path="/" element={<SecNav />}/> */}
     
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Products />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/shop/:id" element={<ProductDetail />} />
    
      {/* this auth routes */}
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<CartPage />} />
      {/* this is admin pages */}
      {/* this is admin pages */}
      <Route path="/Ahome" element={<Ahome />} />
      <Route path="/productlist" element={<ProductList/>} />
      <Route path="/addproduct" element={<AddProduct/>} />
      <Route path="/editproduct/:id" element={<EditProduct/>} />
      {/* <Route path="/addproduct" element={<AddFoodList/>} /> */}
      <Route path="/users" element={<UserList />} />
    
      <Route path="/credit" element={<Credit/>}/>
      <Route path="/myorders" element={<MyOrders/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      
      {/* <Route path="*" element={<Notfound/>}/> */}
      
      {/* this customers list   */}
      <Route path="/MyOrderInfo/:id" element={<UserOrdersInfo/>}/>

      {/* forgot and reset password */}
      <Route path="/forgot" element={<FPassword/>}/>
      <Route path="/reset/:id/:token" element={<RPassword />} />
      <Route path="/return" element={<Return/>}/>

      <Route path="/orders" element={<OrderList />} />
      <Route path="/orders/:id" element={<OrdersInfo />} />
      <Route path="/editOrderList/edit/:id" element={<EditOrderList />} />


      </Routes>


    </div>
  );
}


