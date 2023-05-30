const productos = [
  {
    id: 1,
    nombre: "Tetera de cerámica",
    descripcion: "Tetera de cerámica hecha a mano, capacidad de 1 litro.",
    precio: 29.99,
    imagen: "/assets/img/Tetera-de-ceramica.jpeg",
    categoria: "vajilla",
    cantidad:102
  },
  {
    id: 2,
    nombre: "Set de utensilios de cocina",
    descripcion:
      "Set de 6 utensilios de cocina antiadherentes, incluye espátulas y cucharones.",
    precio: 19.99,
    imagen: "/assets/img/utensilios-cocina.jpeg",
    categoria: "utensilios",
    cantidad:300
  },
  {
    id: 3,
    nombre: "Juego de copas de vino",
    descripcion: "Juego de 4 copas de vino de cristal, capacidad de 350 ml.",
    precio: 39.99,
    imagen: "/assets/img/juego-copas-vino.jpg",
    categoria: "vajilla",
    cantidad:78
  },
  {
    id: 4,
    nombre: "Cuchillos de chef",
    descripcion:
      "Set de 3 cuchillos de chef de acero inoxidable, incluye cuchillo de pan, cuchillo de carne y cuchillo multiusos.",
    precio: 49.99,
    imagen: "/assets/img/juego-de-cuchillos.jpg",
    categoria: "utensilios",
    cantidad:32
  },
  {
    id: 5,
    nombre: "Bandeja de servir de madera",
    descripcion: "Bandeja de servir de madera de pino, tamaño 40x30 cm.",
    precio: 15.99,
    imagen: "/assets/img/bandeja-de-madera.jpg",
    categoria: "vajilla",
    cantidad:96
  },
  {
    id: 6,
    nombre: "Juego de tazas de café",
    descripcion: "Juego de 6 tazas de café de porcelana con platillos a juego.",
    precio: 24.99,
    imagen: "/assets/img/juego-tazas-cafe.jpg",
    categoria: "vajilla",
    cantidad:9
  },
  {
    id: 7,
    nombre: "Exprimidor de cítricos",
    descripcion: "Exprimidor manual de cítricos, fácil de usar y limpiar.",
    precio: 9.99,
    imagen: "/assets/img/exprimidor-citricos.jpg",
    categoria: "artefactos",
    cantidad:145
  },
  {
    id: 8,
    nombre: "Set de recipientes de almacenamiento",
    descripcion:
      "Set de 10 recipientes de almacenamiento de plástico con tapas herméticas.",
    precio: 12.99,
    imagen: "/assets/img/set-tupper.jpg",
    categoria: "almacenamiento",
    cantidad:85
  },
  {
    id: 9,
    nombre: "Molinillo de café",
    descripcion: "Molinillo de café eléctrico con múltiples ajustes de molido.",
    precio: 34.99,
    imagen: "/assets/img/molinillo-cafe.jpg",
    categoria: "artefactos",
    cantidad:12
  },
];

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(productos)
        },500)
    })
}


export const getProductById = (itemId)=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(productos.find(prod => prod.id === parseInt(itemId)))
    },500)
  console.log((productos.find(prod => prod.id === parseInt(itemId))));
  })
  
}

export const getProductByCategory = (productId)=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve( productId ? productos.filter(prod => prod.categoria === productId) : productos)
    },500)
  })
}