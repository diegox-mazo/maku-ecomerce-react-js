import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

function ItemListContainer(prop){

    return(
        <div className='list-container'>
            <h2 className='mb-5'>{prop.children}</h2>
            <div>
                <ItemList></ItemList>
            </div>
            
        </div>
    );
}

export default ItemListContainer;