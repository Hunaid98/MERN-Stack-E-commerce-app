import './App.css';
import Header from './Components/Header';
import Home from './Components/home';
import Cart from './Components/cart/Cart';
import DetailView from './Components/product/DetailView';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TemplateProvider from './template/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import ProductList from './Components/product/ProductList';
import SearchProduct from './Components/product/SearchProduct';
import CheckOut from './Components/checkout/CheckOut';

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/cart' component={Cart} />
              <Route path='/product/:id' component={DetailView} />
              <Route path='/allproduct' component={ProductList} />
              <Route path='/searchproduct' component={SearchProduct} />
              <Route path='/checkout' component={CheckOut} />
            </Switch>
          </Router>
        </ContextProvider>
      </TemplateProvider>
  );
}

export default App;
