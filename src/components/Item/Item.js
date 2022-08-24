import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Item.css';


function Item({item}){

    return(
        <div className='col mb-5'>
            <div className="card mx-auto">
                <img src={item.pictureUrl} className="card-img-top" alt={item.title}/>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">${item.price.toLocaleString("en",{style:"currency", currency: "COL"})}</p>

                    <NavLink to={`/detail/${item.id}`}>
                        <Button variant="secondary">Detalles de Producto</Button>
                    </NavLink>
                    
                </div>
            </div>
        </div>
        
    );
}

export default Item;