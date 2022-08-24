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


/* async function getItem(){
            const respuestaAPI = await fetch('../../products.json');
            console.log(respuestaAPI);
            const miJSON = await respuestaAPI.json();
            console.log('mi Json');
            console.log(miJSON);    
            
            setTimeout(function(){
                //Lamado a buscarItem
                const encontrado = buscarItem(item.id, miJSON);
                console.log('encontrado');
                console.log(encontrado);
    
                setProduct(encontrado);
                console.log('getItem');
                console.log(product);
                // como hacer para pushear el item encontrado en el arreglo de setProduct ????
            },2000);          
        }    
        //Busqueda del item por id
        function buscarItem(id, array){
            console.log('array');
            console.log(array);
            const encontrado = array.find((i)=>i.id===item.id);
            const index = array.indexOf(encontrado);
    
            return array[index];
        }        
        getItem(); */