const products = [
    {
        id: 1,
        title: "Morral Outdoor Balard",
        pictureUrl: "https://cdn-icons-png.flaticon.com/512/861/861054.png",
        price: 99.90,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sem lorem.",
        colors: "Rojo, Negro",
        category: "Sport",
        stock: 5
    },
    {
        id: 2,
        title: "Tula Percros",
        pictureUrl: "https://cdn-icons-png.flaticon.com/512/2917/2917242.png",
        price: 169.90,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sem lorem.",
        colors: "Azul, Blanco",
        category: "Scolar",
        stock: 6
    },
    {
        id: 3,
        title: "Morral Kiran",
        pictureUrl: "https://cdn-icons-png.flaticon.com/512/7533/7533857.png",
        price: 169.90,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sem lorem.",
        colors: "Blanco, Negro",
        category: "Formal",
        stock: 4
    },
    {
        id: 4,
        title: "Morral Plegable Collapse",
        pictureUrl: "https://cdn-icons-png.flaticon.com/512/3132/3132689.png",
        price: 159.90,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sem lorem.",
        colors: "Verde, Negro",
        category: "Formal",
        stock: 0
    },
    {
        id: 5,
        title: "Tula Super Cool 2 Go",
        pictureUrl: "https://cdn-icons-png.flaticon.com/512/3132/3132713.png",
        price: 149.90,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sem lorem.",
        colors: "Azul, Verde",
        category: "Sport",
        stock: 2
    },
    {
        id: 6,
        title: "Morral Rhimon",
        pictureUrl: "https://cdn-icons-png.flaticon.com/512/3132/3132692.png",
        price: 249.90,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sem lorem.",
        colors: "Verde, Negro",
        category: "Scolar",
        stock: 3
    }
]


export function getProducts(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products);
        },1000);
    });
}

export function getProductsByCategory(categoryId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products.filter((prod)=> prod.category === categoryId));
        },1000);
    });
}

export function getProductById(productId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products.find((prod)=>prod.id === parseInt(productId)));
        },1000);
    });
}