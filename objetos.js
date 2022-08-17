var miAuto = {//objeto
    marca: "Toyota",//Propiedad
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function (){//metodo del objeto
        console.log('Auto ${this.modelo} ${this.annio}');
    }
}

 miAuto.marca;//llamada a la prop del objeto


 //funcion constructora de objetos
 function auto (marca,modelo,annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
 }

 