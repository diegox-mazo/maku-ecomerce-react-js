import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ItemCount from '../ItemCount/ItemCount.js';
import './ItemDetail.css';

function ItemDetail({item}){

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    const initial = 1;


    return(
        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Body>
                <h2 className='mb-3'>{item.title}</h2>
                <div className='container'>
                    <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-3'>

                        <div className='col'>
                            <img src={item.pictureUrl} className="detail-img" alt={item.title}/>
                        </div>

                        <div className='col'>

                            <h5 className="card-title">Descripcion:</h5>
                            <p>{item.description}</p>

                            <h5 className="card-title">Colores:</h5>
                            <p className="card-text">{item.colors}</p>

                            <h5 className="card-title">Precio:</h5>
                            <p className="card-text">${item.price}</p>
                        </div>

                        <div className='col'>
                            <ItemCount item={item} initial={initial}></ItemCount>
                        </div>

                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
            <NavLink to="/">
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </NavLink>            
            </Modal.Footer>
        </Modal>
    );            
}

export default ItemDetail;