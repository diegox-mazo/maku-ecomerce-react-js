import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Botonera from './components/NavBar/Botonera.js';
import Home from './Pages/Home.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <header>
          <Botonera/>
        </header>

        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/detail/:productId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path='/cart' element={null}></Route>

          <Route path='/*' element ={<h1>Page not found!!</h1>}></Route>

        </Routes>

        
        {/* <main>
          <ItemListContainer>Greetings</ItemListContainer>
        </main>  */} 

      </BrowserRouter>

            
    </div>
  );
}

export default App;
