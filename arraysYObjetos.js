var articulos = [
    {nombre: "Bici", costp: 3000},
    {nombre: "Tv", costp: 2500},
    {nombre: "Libro", costp: 320},
    {nombre: "Celular", costp: 10000},
    {nombre: "Laptop", costp: 20000},
    {nombre: "Teclado", costp: 500},
    {nombre: "Audifonos", costp: 1700}
]

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costp<=500
});

var articulosMapeados = articulos.map(function(articulo){
    return articulo.nombre
});

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre == "Laptop"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costp<=700
});
