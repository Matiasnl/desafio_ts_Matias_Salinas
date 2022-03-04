interface Producto{
    nombre: string;
    categorias: string[];
    precio: number;
    descuento: number;
}

let audifonos: Producto = {
    nombre:"Audifonos",
    categorias: ["Tecnología","Sonido"],
    precio: 10000,
    descuento: 20
}

let precioFinal:number

precioFinal= audifonos.precio - (audifonos.precio * (audifonos.descuento * 0.01))

console.log(`El precio final de ${audifonos.nombre} es : ${precioFinal}`)