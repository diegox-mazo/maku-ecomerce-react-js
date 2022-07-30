import {useState} from 'react';
import './ItemCount.css';

function ItemCount({stock, initial=1}){
    
    let btnStatus = false;
    let onAdd = 0;

    if(stock===0){
        btnStatus= true;
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
        onAdd = contador;
        console.log(`Se añadio al carrito ${onAdd} unidades del producto`);
    }
    
    return(
        <div className='contenedor-card'>
            <div className="card" >
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">PRODUCTO</h5>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" onClick={disminuirContador}>-</button>
                        <input type="text" className="form-control cantidad" value={contador} readOnly={true}></input>
                        <button className="btn btn-outline-secondary" type="button" onClick={aumentarContador}>+</button>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-outline-primary m-2" onClick={agregarCarrito} disabled={btnStatus}>Agregar a Carrito</button>
        </div>
        

    );
}

export default ItemCount;