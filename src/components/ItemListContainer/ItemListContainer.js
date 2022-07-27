import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css';

function ItemListContainer(prop){
    return(
        <div className='list-container'>
            <h2>{prop.children}</h2>
        </div>
    );
}

export default ItemListContainer;