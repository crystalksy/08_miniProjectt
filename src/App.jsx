import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Confirmed from "./pages/Confirmed";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div className = 'App'>
        <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/productList" component = {ProductList}/>
        <Route exact path = "/register" component = {Register}/>
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/cart/:id" component = {Cart}/>
        <Route exact path = "/product/:id" component = {Product}/>
        <Route exact path = "/confirmed/:id" component = {Confirmed}/>
        </Switch>
      </div>
    </Router>
  
  )
};
export default App;
