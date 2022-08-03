import {useState} from 'react';
import './ItemCount.css';

function ItemCount({stock, initial=1}){
    
    let btnDisabled = false;

    if(stock===0){
        btnDisabled= true;
        initial = 0;
    }

    const [contador, setContador] = useState(initial);

    function aumentarContador(){
        if(contador<stock){
            setContador(contador+1);
        }        
    }

    function disminuirContador(){
        if (contador>0){
            setContador(contador-1);
        } 
        
    }    

    function agregarCarrito(){
        if (contador!==0){
            alert(`Se añadio al carrito ${contador} unidades del producto`);
        }        
    }
    
    return(

        <div className="contador mx-auto">
            <div className='stock mt-2'>
                <h5>Stock disponible: {stock}</h5>
            </div>
            <div className="input-group mb-1">
                <button className="btn btn-outline-secondary" type="button" onClick={disminuirContador}>-</button>
                <input type="text" className="form-control" value={contador} readOnly={true}></input>
                <button className="btn btn-outline-secondary" type="button" onClick={aumentarContador}>+</button>
            </div>
            <button type="button" className="btn btn-outline-primary" onClick={agregarCarrito} disabled={btnDisabled}>Agregar a Carrito</button>
            
        </div> 

    );
}

export default ItemCount;