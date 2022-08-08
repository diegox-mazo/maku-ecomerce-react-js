import {useState,useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.js';


function ItemDetailContainer ({item}){

    const [product, setProduct] = useState([]);

    async function getItem(){
        const respuestaAPI = await fetch('../../products.json');
        console.log(respuestaAPI);
        const miJSON = await respuestaAPI.json();
        console.log('mi Json');
        console.log(miJSON);

        
        setTimeout(function(){
            //Busqueda del item por id
            const encontrado = buscarItem(item.id, miJSON);
            console.log('encontrado');
            console.log(encontrado);

            setProduct(encontrado);
            console.log('getItem');
            console.log(product);
            // como hacer para pushear el item encontrado en el arreglo de setProduct ????
        },2000);          
    }
    
    function buscarItem(id, array){
        console.log('array');
        console.log(array);
        const encontrado = array.find((i)=>i.id===item.id);
        const index = array.indexOf(encontrado);

        return array[index];
    }

    useEffect(()=>{        
        
        getItem();

    },[]);


    return (
        <ItemDetail item = {product}></ItemDetail>
    );       

}

export default ItemDetailContainer;