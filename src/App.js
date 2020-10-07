import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import Orders from './components/dashboard/Orders'
import MessageList from './components/dashboard/MessageList'
import OrderDetails from './components/orders/OrderDetails'
import ProductDetails from './components/orders/ProductDetails'
import SignIn from './components/auth/SignIn';
import CreateProduct from './components/orders/CreateProduct'
import Products from './components/dashboard/Products';
import sendMessage from './components/dashboard/sendMessage'
import 'materialize-css/dist/css/materialize.min.css';
import AddAdmin from './components/orders/AddAdmin';
import Sidenav from './components/layout/Sidenav';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <div className="App">
        <Sidenav/>
        <Navbar/>
        
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/order/:id' component={OrderDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/addAdmin' component={AddAdmin}/>
          <Route path='/create' component={CreateProduct}/>
          <Route path='/messages' component={MessageList}/>
          <Route path='/orders' component={Orders}/>
          <Route path='/products' component={Products}/>
          <Route path='/product/:id' component={ProductDetails}/>
          <Route path='/sendMessage' component={sendMessage}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  } 
}

export default App;
