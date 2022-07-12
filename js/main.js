class remaras{
    constructor(marca,modelo,talle,color,precio){
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase(); 
        this.modelo = talle.toUpperCase(); 
        this.modelo = color.toUpperCase(); 
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.10;
    }
    descuento() {
        this.precio = this.precio - 0.70;
    }
}

const remarasRopa = []
remarasRopa.push(new remaras("nike", "Sportswear","xl","azul",10));
remarasRopa.push(new remaras("dior", "casio","xl","negra",12));
remarasRopa.unshift(new remaras("moncler", "atlas" ,"xl","roja",15));

for (const remaras of remarasRopa)
    remaras.sumaIva();

for (const remaras of remarasRopa) 
    remaras.descuento();

console.log(remarasRopa)  

