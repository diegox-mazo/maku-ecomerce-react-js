//npm install firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDldX5FXBRK5tKSdP0xSC6_5zbRWO00Yh4",
  authDomain: "maku-coderhouse-ecommerce.firebaseapp.com",
  projectId: "maku-coderhouse-ecommerce",
  storageBucket: "maku-coderhouse-ecommerce.appspot.com",
  messagingSenderId: "846326676515",
  appId: "1:846326676515:web:dd3a050f9c680159788596"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//seleccionar una base de datos
const db = getFirestore(app);



export function getProducts(){

    return new Promise((resolve, reject)=>{

        //creo la referencia a la coleccion que quiero traer
        const colRef = collection(db,"maku-products");

        getDocs(colRef).then((snapshot)=>{
            console.log('>>>snapshot.docs', snapshot.docs);
        
            const products = snapshot.docs.map((rawDoc)=>{
                return{
                    id: rawDoc.id,
                    ...rawDoc.data()
                }
            });
        
            console.log('>>productos', products);
            resolve(products);
        
        },(error)=>{
            reject('error al traer los datos', error);
        });
    });
}



export function getProductsByCategory(categoryId){
    return new Promise((resolve, reject)=>{

        const consulta = query(collection(db, 'maku-products'), where('category','==', categoryId));
        getDocs(consulta).then((snapshot)=>{
            if(snapshot.size===0){
                console.log('No se encontraron productos');
                return;
            }
            const products = snapshot.docs.map((rawDoc)=>{
                return{
                    id: rawDoc.id,
                    ...rawDoc.data()
                }
            });

            console.log('>>productos', products);
            resolve(products);
        }, (error)=>{
            reject('error al traer los datos', error);
        });
    });
}

export function getProductById(productId){
    return new Promise((resolve, reject)=>{
        
        const itemRef = doc(db,'maku-products', productId);
        getDocs(itemRef).then((snapshot)=>{
            if(snapshot.exists()){
                
                console.log({id:snapshot.id,...snapshot.data()});
                const product={id:snapshot.id,...snapshot.data()};
                resolve(product);
            }
        },(error)=>{
            reject('error al traer los datos', error);
        });
    });
}