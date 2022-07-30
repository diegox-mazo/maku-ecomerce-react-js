import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer(prop){

    return(
        <div className='list-container'>
            <h2>{prop.children}</h2>
            <div>
                <ItemCount stock={5} initial={1}/>
            </div>
            
        </div>
    );
}

export default ItemListContainer;