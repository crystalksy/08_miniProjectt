import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
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
        <Route exact path = "/cart" component = {Cart}/>
        <Route exact path = "/product" component = {Product}/>
        </Switch>
      </div>
    </Router>
  
  )
};
export default App;



// import Product from "./pages/Product";
// import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";

// const App = () => {
//   return <Home/>;
// };

// export default App;