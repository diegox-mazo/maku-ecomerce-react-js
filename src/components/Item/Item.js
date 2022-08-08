import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.js';
import './Item.css';


function Item({item}){

    const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    const handleShow = () => {
        if (show === false) {
            setShow(true);
        }
        else{
            setShow(false);
        }        
    };

    // ¿Como hacer para comunicar el estado True or false de un hijo al componente padre?

    return(
        <div className='col mb-5'>
            <div className="card mx-auto">
                <img src={item.pictureUrl} className="card-img-top" alt={item.title}/>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.price}</p>
                    {/* <!-- Modal --> */}
                    <Button variant="secondary" onClick={handleShow}>Detalles de Producto</Button>
                </div>
            </div>
            <ItemCount stock={item.stock} initial={1}></ItemCount>

            {/* ItemDetailContainer */}
            {
                show ?
                <ItemDetailContainer item = {item}></ItemDetailContainer>
                : null
            }           

        </div>
        
    );
}

export default Item;