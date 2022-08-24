import {useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext.js';
import ItemCount from '../ItemCount/ItemCount.js';
import './ItemDetail.css';

function ItemDetail({item}){

    const context = useContext(CartContext);
    // console.log(context);    

    const [show, setShow] = useState(true);

    const handleOnAdd=(quantity)=>{
        if (quantity !== 0){            
            context.addToCart({...item, quantity});
            setShow(false);
        }        
    }


    return(

        <div className='container mt-3 mx-auto py-3 item-container'>
            <h2 className='mt-2 mb-1'>{item.title}</h2>

            <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 d-block d-sm-flex'>

                <div className='col'>
                    <img src={item.pictureUrl} className="w-100" alt={item.title}/>
                </div>

                <div className='col p-3 my-auto'>
                    <h5 className="card-title my-3">Descripcion:</h5>
                    <p>{item.description}</p>

                    <h5 className="card-title my-3">Categoria:</h5>
                    <p className="card-text">{item.category}</p>

                    <h5 className="card-title my-3">Colores:</h5>
                    <p className="card-text">{item.colors}</p>

                    <h5 className="card-title">Precio:</h5>
                    <p className="card-text">${item.price}</p>
                </div>

                <div className='col d-lg-none'></div>

                {
                    (show)? 
                    <div className='col mt-lg-5'>
                        <ItemCount item={item} initial={1} onAdd={handleOnAdd}></ItemCount>
                    </div> 
                    :                        
                        <div className='mt-5'>
                            <NavLink to={`/cart`}>
                                <button className='btn btn-danger btn-lg detail-btn m-2' type='button'>Finalizar Compra</button>
                            </NavLink>
                            <NavLink to={`/`}>
                                <button className='btn btn-primary btn-lg detail-btn' type='button'>Seguir Comprando</button>
                            </NavLink>                          
                        </div>                                          
                }             

            </div>

        </div>
        
    );            
}

export default ItemDetail;