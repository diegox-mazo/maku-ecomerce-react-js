import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

function ItemListContainer(prop){

    const [products, setProducts] = useState([]);

    async function consumirProductsAPI(){
        const respuestaAPI = await fetch('../../products.json');
        console.log(respuestaAPI);
        const miJSON = await respuestaAPI.json();
        console.log(miJSON);
        setTimeout(function(){
            setProducts(miJSON);
        },2000);
               
    }  

    useEffect(()=>{        

        consumirProductsAPI();

    },[]);

    return(
        <div className='list-container'>
            <h2 className='mb-5'>{prop.children}</h2>
            <div>
                <ItemList products = {products}></ItemList>
            </div>
            
        </div>
    );
}

export default ItemListContainer;