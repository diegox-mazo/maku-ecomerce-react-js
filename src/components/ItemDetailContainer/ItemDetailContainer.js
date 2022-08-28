import {useState,useEffect} from 'react';
//import {getProductById} from '../../LocalAPI.js';
import {getProductById} from '../API/APIFirebase.js'
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import './ItemDetailContainer.css';


function ItemDetailContainer (){

    const [product, setProduct] = useState({});  //instancia un objeto vacio {} no un array [].
    const {productId} = useParams();
    
    useEffect(()=>{

        getProductById(productId)
            .then(prod =>{
                setProduct(prod);
                console.log(prod);
            })
            .catch(error =>{
                console.log(error);
            })

    },[productId]); //Cuando cambia el ProductId

    if(product===undefined){
        return <div>...Cargando...</div>
    }
    
    return (
        <ItemDetail item = {product}></ItemDetail>
    );       

}

export default ItemDetailContainer;