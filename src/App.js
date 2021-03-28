import './App.css';
import {Switch, Route, Link} from 'react-router-dom';

import Navbar from './components/AppNavbar';
import Login from './components/Login';
import CreateUser from './components/users/CreateUser';
import Users from './components/users/Users';
import UpdateUser from './components/users/UpdateUser';
import GetProducts from './components/products/GetProducts';
import CreateProduct from './components/products/CreateProduct';
import GetOrders  from "./components/orders/GetOrders";
import OrderSummary from './components/orders/OrderSummary';
import PlaceOrder from './components/orders/PlaceOrder';
import UpdateStatus from './components/orders/UpdateStatus';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';

import Test from './components/Test';

function App() {
  return (
    <div className="App">
      {/* <h2> Order Management </h2> */}
      <Navbar /> 
      {/* <Link to="/">Home</Link> */}
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/create-user">
          <CreateUser />
        </Route>
        <Route path="/get-users">
          <Users/>      
        </Route>
        <Route path="/update-user">
          <UpdateUser/>
        </Route>
        <Route path="/get-products">
          <GetProducts/>
        </Route>
        <Route path="/create-product">
          <CreateProduct/>
        </Route>
        <Route path="/get-orders">
          <GetOrders/>    
        </Route>
        <Route path="/update-status">
          <UpdateStatus/>
        </Route>
        <Route path="/order-summary">
          <OrderSummary/>  
        </Route>
        <Route path="/place-order">
          <PlaceOrder/>
        </Route>
        {/* <Route path="/">
          <Home/>
        </Route> */}
        <PrivateRoute path='/' component={Home}/>
        
        {/* <Test/> */}
      </Switch>
    </div>
  );
}

export default App;
