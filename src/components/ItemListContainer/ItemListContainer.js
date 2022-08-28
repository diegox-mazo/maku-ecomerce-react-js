import {useState,useEffect} from 'react';
//import {getProducts, getProductsByCategory} from '../../LocalAPI.js';
import {getProducts, getProductsByCategory} from '../API/APIFirebase.js';
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';


function ItemListContainer(){

    const [products, setProducts] = useState([]);  //devuelve un Array de datos [].
    const  {categoryId} = useParams(); //parametros por URL 

    useEffect(()=>{ 
        //LocalAPI
        if(!categoryId){

            getProducts().then(prods =>{
                setProducts(prods);
                console.log(prods);
            });
        }
        else{

            getProductsByCategory(categoryId).then(prods =>{
                setProducts(prods);
                console.log(prods);
            });            
        }        

    },[categoryId]); // Carga al inicio del render.

    

    return(
        <div>
            <div className='list-container mb-5'>
                <div>
                    <ItemList products = {products}></ItemList>
                </div>                
            </div>
            <div className='p-5 mt-5'></div><div className='p-3 mt-3'></div>
        </div>
        
    );
}

export default ItemListContainer;