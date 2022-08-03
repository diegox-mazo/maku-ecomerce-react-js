import {useState,useEffect} from 'react';
import Item from '../Item/Item';
import './ItemList.css';

function ItemList(){

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