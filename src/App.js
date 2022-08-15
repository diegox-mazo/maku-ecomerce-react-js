import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartCustomContext from './context/CartContext';
import Botonera from './components/NavBar/Botonera.js';
import Home from './Pages/Home.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Cart from './components/Cart/Cart.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <CartCustomContext>

        <BrowserRouter>

          <header>
            <Botonera></Botonera>
          </header>

          <Routes>
            <Route path='/' element = {<Home></Home>}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer></ItemListContainer>}></Route>
            <Route path='/detail/:productId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>

            <Route path='/*' element ={<h1>Page not found!!</h1>}></Route>

          </Routes>

        </BrowserRouter>

      </CartCustomContext>
            
    </div>
  );
}

export default App;
