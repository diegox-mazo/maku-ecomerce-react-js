import Item from '../Item/Item';
import './ItemList.css';

function ItemList({products}){

    
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