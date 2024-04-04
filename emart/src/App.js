import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import {Switch, Route} from 'react-router-dom'
import Products from './Component/Products';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/products' Component={Products}/>
    <Home/>
    </Switch>
    </>
  );
}

export default App;
