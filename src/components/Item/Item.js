import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

function Item({item}){

    return(
        <div className='col mb-5'>
            <div className="card mx-auto">
                <img src={item.pictureUrl} className="card-img-top" alt={item.title}/>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.price}</p>
                    <a href="#link" className="btn btn-secondary">Ver Detalles</a>
                </div>
            </div>
            <ItemCount stock={item.stock} initial={1}></ItemCount>
        </div>
        
    );
}

export default Item;