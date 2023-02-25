
let loadProducts = () => {

    
    //fetch('https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.json')
    //  .then(response => response.json() ) /* Convierte el response a texto */
    //  .then(result => {

    //    console.log( xml );
    //  });
    

      fetch("https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.xml")
      .then(response => response.text() ) /* Convierte el response a texto */
      .then(result => {

        let  = (new DOMParser()).parseFromString(result, 'application/xml');

        let arrProduct = xml.getElementsByTagName("products")

        for (let item of arrProduct){
            console.log(item)
        }
      });
  }

  loadProducts();


