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
        pictureUrl: "https://cdn-icons.flaticon.com/png/512/4209/premium/4209081.png?token=exp=1660159771~hmac=23c9613da8267b0324fcfb331ac209c8",
        price: 169.90,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sem lorem.",
        colors: "Blanco, Negro",
        category: "Formal",
        stock: 4
    },
    {
        id: 4,
        title: "Morral Plegable Collapse",
        pictureUrl: "https://cdn-icons.flaticon.com/png/512/4442/premium/4442255.png?token=exp=1660159777~hmac=754cfc04858537346531dbe75953bcc4",
        price: 159.90,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sem lorem.",
        colors: "Verde, Negro",
        category: "Formal",
        stock: 0
    },
    {
        id: 5,
        title: "Tula Super Cool 2 Go",
        pictureUrl: "https://cdn-icons.flaticon.com/png/512/4063/premium/4063291.png?token=exp=1660159783~hmac=38f48f551f7d1a6b95c657c084819848",
        price: 149.90,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sem lorem.",
        colors: "Azul, Verde",
        category: "Sport",
        stock: 2
    },
    {
        id: 6,
        title: "Morral Rhimon",
        pictureUrl: "https://cdn-icons.flaticon.com/png/512/3958/premium/3958285.png?token=exp=1660159877~hmac=19041046216500a4e567357c2cfcaa83",
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