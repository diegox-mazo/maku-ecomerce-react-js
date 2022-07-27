import './App.css';
import Botonera from './components/NavBar/Botonera.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <header>
        <Botonera/>
      </header>
      <main>
        <ItemListContainer>Greetings</ItemListContainer>
      </main>    

    </div>
  );
}

export default App;
