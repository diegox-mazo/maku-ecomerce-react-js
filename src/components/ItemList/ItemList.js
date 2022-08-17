import { NavLink } from 'react-router-dom';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList({products}){

    if(!products.length){
        return <div className='d-flex flex-column justify-content-center'>
                    <div className="mx-auto my-3 wobbling-4"></div>
                    <div>...Cargando...</div>
                    <NavLink to={'/'}>
                        <button className='btn btn-info mt-3'>Inicio</button>
                    </NavLink>
                </div>
    }
    
    return(
        <div className='container'>
            <div className='row row-cols-md-2 row-cols-lg-3'>
                {                
                    products.map((product)=>{
                        return(
                            <Item key={product.id} item = {product}></Item>
                        );
                    })
                }
            </div>            
        </div>
    );
}

export default ItemList;