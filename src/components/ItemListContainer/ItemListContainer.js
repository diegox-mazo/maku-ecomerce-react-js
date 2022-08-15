import {useState,useEffect} from 'react';
import {getProducts, getProductsByCategory} from '../../LocalAPI.js';
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
        <div className='list-container'>
            <div>
                <ItemList products = {products}></ItemList>
            </div>
            
        </div>
    );
}

export default ItemListContainer;


/* async function consumirProductsAPI(){
            const respuestaAPI = await fetch('../../products.json');
            console.log(respuestaAPI);
            const miJSON = await respuestaAPI.json();
            console.log(miJSON);
            setTimeout(function(){
                setProducts(miJSON);
            },2000);               
        }
        consumirProductsAPI(); */