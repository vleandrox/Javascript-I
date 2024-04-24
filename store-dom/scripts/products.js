//***PROPIEDADES DE CLASE PRODUCTO***
// const producto1={
//     nombre:"celular",
//     precio:100000,
//     stock: 2
// }
// producto1.id = "id123";
// producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";
// console.log(producto1);
// console.log(producto1.nombre);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//***CREACION DE UN PRODUCTO ****
// class Product {
//     constructor(id,title,price,stock,images,onsale){
//         this.id=id
//         this.title=title
//         this.price=price
//         this.stock=stock
//         this.images=images
//         this.onsale=onsale
//     }
// }
// const prod1 = new Product();
// const prod2 = new Product("001122abc","Laptop","1600","50","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True");
// const prod3 = new Product("001122abc","Laptop","1600","50","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True");

// console.log(prod1)
// console.log(prod2.id,prod2.title,prod2.price)
// console.log(prod3)
// console.log(prod2.title,prod3.onsale)

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//***OBTENCION Y MODIFICACION DE PROPIEDADES DE UNA INSTANCIA***
// class Product {
//     constructor(id,title,price,stock,images,onsale,supplier){
//         this.id=id
//         this.title=title
//         this.price=price
//         this.stock=stock
//         this.images=images
//         this.onsale=onsale
//         this._supplier=supplier
//     }

//     get getSupplier() { return this._supplier };
//     set setSupplier(newName) { this._supplier = newName};
// }

// const prod1 = new Product();
// const prod2 = new Product("001122abc","Laptop","1600","50","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True");
// const prod3 = new Product("001122abc","Laptop","1600","50","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True");
// const prod4 = new Product("001122abc","Laptop","1600","50","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Amazon")

// console.log(prod1)
// console.log(prod2.id,prod2.title,prod2.price)
// console.log(prod3)
// console.log(prod2.title,prod3.onsale)
// console.log(prod4.getSupplier)
// prod4.setSupplier = "Aliexpress"
// console.log(prod4.getSupplier)

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//***VENTA DE PRODUCTOS***
// class Product {
//     constructor(id,title,price,stock,images,onsale,supplier){
//         this.id=id
//         this.title=title
//         this.price=price
//         this.stock=stock
//         this.images=images
//         this.onsale=onsale
//         this._supplier=supplier
//     }
//     sellUnits(units){
//         this.stock=this.stock - units
//         console.log("Se venderan las siguientes unidades : " + units)
//         //console.log("El stock actual es :" + this.stock)
//         if(this.stock < 0)
//         {
//             console.log("No hay stock suficiente para vender !!!")
//         }
//         else{
//             console.log("El stock actual es :" + this.stock)
//         }
//     }

//     get getSupplier() { return this._supplier };
//     set setSupplier(newName) { this._supplier = newName};
// }

// const prod1 = new Product();
// const prod2 = new Product("001122abc","Laptop","1600","50","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True");
// const prod3 = new Product("001122abc","Laptop","1600","50","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True");
// const prod4 = new Product("001122abc","Laptop","1600","50","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Amazon")
// const prod5 = new Product("001122abc","Laptop","1600","12","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Amazon")

// console.log(prod5)
// prod5.sellUnits(10)
// prod5.sellUnits(5)



//***ARRAYS/ARREGLOS***
// class Product {
//     constructor(id,title,price,stock,images,onsale,supplier){
//         this.id=id
//         this.title=title
//         this.price=price
//         this.stock=stock
//         this.images=images
//         this.onsale=onsale
//         this._supplier=supplier
//     }
// }
// const prod1 = new Product("001100abc","Laptop","1600","50","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Amazon")
// const prod2 = new Product("001111abc","Tablet","1000","20","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Aliexpres",);
// const prod3 = new Product("001122abc","Smartphone","1200","40","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","AliBaba");
// const prod4 = new Product("001133abc","Audifonos","500","30","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Samsung")
// const products = [prod1,prod2,prod3,prod4];
// console.log(products) //Impresión en consola del array completo
// console.log([prod2]) //Impresión del segundo elemento del array
// console.log(products[products.length-1].title)  //Impresión de la propiedad title del último elemento del array



//***AMPLIANDO LISTA DE PRODUCTOS ***
// class Product {
//     constructor(id,title,price,stock,images,onsale,supplier){
//         this.id=id
//         this.title=title
//         this.price=price
//         this.stock=stock
//         this.images=images
//         this.onsale=onsale
//         this._supplier=supplier
//     }
// }
// const prod1 = new Product("001100abc","Laptop","1600","50","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Amazon")
// const prod2 = new Product("001111abc","Tablet","1000","20","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Aliexpres",);
// const prod3 = new Product("001122abc","Smartphone","1200","40","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","AliBaba");
// const prod4 = new Product("001133abc","Audifonos","500","30","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Samsung")
// const prod5 = new Product("001133abc","Teclado ","200","20","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Samsung")
// const prod6 = new Product("001133abc","Mouse","120","45","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Samsung")
// const products = [prod1,prod2,prod3,prod4];
// products.unshift(prod5)
// products.push(prod6)
// console.log(products)



//*** ELIMINANDO PRODUCTOS DE UNA LISTA ***
// class Product {
//     constructor(id,title,price,stock,images,onsale,supplier){
//         this.id=id
//         this.title=title
//         this.price=price
//         this.stock=stock
//         this.images=images
//         this.onsale=onsale
//         this._supplier=supplier
//     }
// }
// const prod1 = new Product("001100abc","Laptop","1600","50","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Amazon")
// const prod2 = new Product("001111abc","Tablet","1000","20","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Aliexpres",);
// const prod3 = new Product("001122abc","Smartphone","1200","40","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","AliBaba");
// const prod4 = new Product("001133abc","Audifonos","500","30","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Samsung")
// const prod5 = new Product("001133abc","Teclado ","200","20","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Samsung")
// const prod6 = new Product("001133abc","Mouse","120","45","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Samsung")

// const products = [prod1,prod2,prod3,prod4,prod5,prod6];
// console.log(products)
// products.shift()
// console.log(products)
// products.pop()
// console.log(products)


//***ENRIQUECIMIENTO DE INFORMACION DE PRODUCTOS***
// class Product {
//     constructor(id,title,price,stock,images,onsale,supplier,colors,description){
//         this.id=id
//         this.title=title
//         this.price=price
//         this.stock=stock
//         this.images=images
//         this.onsale=onsale        
//         this._supplier=supplier
//         this.colors=colors    
//         this.description=description
//     }
// }
// const prod1 = new Product("001100abc","Laptop","1600","50","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Amazon","Plomo","Laptop de 14'")
// const prod2 = new Product("001111abc","Tablet","1000","20","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Aliexpres","Negro","Tablet Samsung");
// const prod3 = new Product("001122abc","Smartphone","1200","40","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","AliBaba","Blanco","Motog G54");
// const prod4 = new Product("001133abc","Audifonos","500","30","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Samsung","Blanco","Audifonos Bluetoh")
// const prod5 = new Product("001133abc","Teclado ","200","20","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Samsung","Azul","Teclado Mecanico")
// const prod6 = new Product("001133abc","Mouse","120","45","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Samsung","Plateado","Mouse Gamer")

// const products = [prod1,prod2,prod3,prod4,prod5,prod6];
// console.log(products)

//---------------------------------
//**OTRO TEMA EN DONDE SE USA DOM  */
class Product {
    constructor(id,title,price,stock,images,onsale,supplier,colors,description){
        this.id=id
        this.title=title
        this.price=price
        this.stock=stock
        this.images=images
        this.onsale=onsale        
        this._supplier=supplier
        this.colors=colors    
        this.description=description
    }
}
const prod1 = new Product("001100abc","laptop mackbook 15'","1600","50","https://falabella.scene7.com/is/image/FalabellaPE/883085754_1?wid=1500&hei=1500&qlt=70","True","Amazon","Plomo","Laptop de 14'")
const prod2 = new Product("001111abc","tablet lenovo","1000","20","https://falabella.scene7.com/is/image/FalabellaPE/883093716_1?wid=1500&hei=1500&qlt=70","True","Aliexpres","Negro","Tablet Lenovo");
const prod3 = new Product("001122abc","motorola g54","650","40","https://falabella.scene7.com/is/image/FalabellaPE/20031004_1?wid=800&hei=800&qlt=70","True","AliBaba","Negro","Motog G54");
const prod4 = new Product("001133abc","airpods pro","500","30","https://falabella.scene7.com/is/image/FalabellaPE/gsc_125316610_4271946_1?wid=1500&hei=1500&qlt=70","True","Samsung","Blanco","Audifonos Bluetoh")
const prod5 = new Product("001133abc","teclado gamer ","200","20","https://falabella.scene7.com/is/image/FalabellaPE/20074444_1?wid=1500&hei=1500&qlt=70","True","Samsung","Azul","Teclado Mecanico")
const prod6 = new Product("001133abc","mouse","120","45","https://falabella.scene7.com/is/image/FalabellaPE/gsc_120544236_2713013_2?wid=1500&hei=1500&qlt=70","True","Samsung","Plateado","Mouse Gamer")

const products = [prod1,prod2,prod3,prod4,prod5,prod6];