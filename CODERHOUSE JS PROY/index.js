
//DEFINO LAS ZAPATILLAS

let zapatillas = [];

if ((localStorage.getItem("zapatillas") == null) || (JSON.parse(localStorage.getItem("zapatillas")).length == 0 )) {
 zapatillas = [{
  id: 1,
  nombre: "NIKE DUNK HI X AMBUSH",
  precio: 230,
  carrito: false,
  oferta: false
},
{
  id: 2,
  nombre: "LOUIS VUITTON VOLTAIRE",
  precio: 500,
  carrito: false,
  oferta: true
},
{
  id: 3,
  nombre: "AIR FORCE 1 '07 QS",
  precio: 120,
  carrito: false,
  oferta: true

},
{
  id: 4,
  nombre: "Dior ID",
  precio: 890,
  carrito: false,
  oferta: false
},
{
  id: 5,
  nombre: "ZAPATILLAS STAN SMITH DISNEY MONSTERS, INC.",
  precio: 90,
  carrito: false,
  oferta: false
},
{
  id: 14,
  nombre: "New Balance x Jaden Vision Racer",
  precio: 210,
  carrito: false,
  oferta: true
  
},
{
  id: 7,
  nombre: "NIKE DUNK HIGH 1985 'BLACK ACID WASH'",
  precio: 215,
  carrito: false,
  oferta: true
},
{
  id: 8,
  nombre: "AIR JORDAN 7 RETRO 'PSG'",
  precio: 300,
  carrito: false,
  oferta: false
},
{
  id: 9,
  nombre: "ZAPATILLAS ADIDAS X LEGO® SPORT",
  precio: 80,
  carrito: false,
  oferta: true
},{
  id: 10,
  nombre: "ZAPATILLAS SUPERSTAR BOLD",
  precio: 70,
  carrito: false,
  oferta: false
},{
  id: 11,
  nombre: "NIKE DUNK X UNDERCOVER '1985'",
  precio: 180,
  carrito: false,
  oferta: false
},{
  id: 12,
  nombre: "AIR JORDAN 1 'RUST SHADOW'",
  precio: 200,
  carrito: false,
  oferta: false
},
{
  id: 6,
  nombre: "AIR JORDAN 1 RETRO HIGH OG",
  precio: 150,
  carrito: false,
  oferta: true
},
{
  id: 15,
  nombre: "ZAPATILLAS FORUM EXHIBIT MID",
  precio: 200,
  carrito: false,
  oferta: true
},{
  id: 16,
  nombre: " ADIDAS STAN SMITH X RANA RENÉ",
  precio: 155,
  carrito: false,
  oferta: false
},
{
  id: 17,
  nombre: "NIKE DUNK LOW 'UNDEFEATED'",
  precio: 135,
  carrito: false,
  oferta: false
}
, {
  id: 13,
  nombre: "Adidas Forum 84'",
  precio: 180,
  carrito: false,
  oferta: false
}


];
 localStorage.setItem("zapatillas", JSON.stringify(zapatillas));
 zapatillas = JSON.parse(localStorage.getItem("zapatillas"));
 console.log(zapatillas)
}

else {
 zapatillas = JSON.parse(localStorage.getItem("zapatillas"));
}
console.log(zapatillas);
// DEFINO LAS ZAPATILLAS




// CREO/LLAMO EL CARRITO
let carrito = [];
if (localStorage.getItem("carrito") == null) {
 carrito = [];
}
else {
 carrito = JSON.parse(localStorage.getItem("carrito"));
}
//CREO/LLAMO EL CARRITO
console.log("Carrito: " + carrito.length);

const agregarTitulo = function () {
// AGREGO UN TITLE
//Agregamos <h3> con jQuery ocultos con style = "display: none;"
$("#Titulo").prepend("<h2 style='display: none; 'class='Titulo text-center'> ¡Coleccionables <b>UNICOS</b> a 3 clicks!  </h2>");
$("#Titulo").prepend("<h1 style='display: none;'class='Titulo text-center'> <b>CoderShoes</b> </h1>");

//Muestra con Show() todos los <h3>
$(".Titulo").fadeIn("slow");

//AGREGO UN TITLE
}
agregarTitulo();

//HAGO LA FUNCION PARA AGREGAR LOS ELEMENTOS SEGUN CORRESPONDA.
const agregarElementos = function () {
for (const zapatilla of zapatillas) {

 
  //OFERTA
if (zapatilla.oferta == true) {
   //NUEVO
  if (zapatilla.carrito == false) {
  $("#app").append(

    `  <div data-aos="fade-right" data-aos-duration="500"> <!--AOS-->
                    <div class="card text-center mx-5 my-5"  style="width: 18rem;" id="${zapatilla.id}">
                <img class="card-img-top imagen-tamano" src="img/Zapatillas${zapatilla.id}.png" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${zapatilla.nombre}</h5>
                  <p class="card-text"><del>USD${zapatilla.precio * 1.70}</del> USD${zapatilla.precio}</p>
                  <button class="btn btn-dark boton" type="submit"  id="boton_${zapatilla.id}"  > Agregar al carrito +1</button>
                </div>
                </div>
                </div> <!--AOS-->
                `
  ) }
  else {
    $("#app").append(
    `  <div data-aos="fade-right" data-aos-duration="500"> <!--AOS-->
    <div class="card text-center mx-5 my-5"  style="width: 18rem;" id="${zapatilla.id}">
<img class="card-img-top imagen-tamano" src="img/Zapatillas${zapatilla.id}.png" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">${zapatilla.nombre}</h5>
  <p class="card-text"><del>USD${zapatilla.precio * 1.70}</del> USD${zapatilla.precio}</p>
  <button class="btn btn-dark boton" type="submit"  id="boton_${zapatilla.id}" disabled  > En carrito </button>
</div>
</div>
</div> <!--AOS-->
`)
  }
  //FIN NUEVO
} //FIN OFERTA

else {

          if (zapatilla.carrito == false) {
                  $("#app").append(

                    `  <div data-aos="fade-left" data-aos-duration="500"> <!--AOS-->
                    <div class="card text-center mx-5 my-5"  style="width: 18rem;" id="${zapatilla.id}">
                <img class="card-img-top imagen-tamano" src="img/Zapatillas${zapatilla.id}.png" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${zapatilla.nombre}</h5>
                  <p class="card-text">USD${zapatilla.precio}</p>
                  <button class="btn btn-dark boton" type="submit"  id="boton_${zapatilla.id}"  > Agregar al carrito +1</button>
                </div>
                </div>
                </div> <!--AOS-->
                `




  ) }
//IF
else {
  $("#app").append(

    `
    <div data-aos="fade-left" data-aos-duration="500"> <!--AOS-->
    <div class="card text-center mx-5 my-5"  style="width: 18rem;" id="${zapatilla.id}">
<img class="card-img-top imagen-tamano" src="img/Zapatillas${zapatilla.id}.png" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">${zapatilla.nombre}</h5>
  <p class="card-text">USD${zapatilla.precio}</p>
  <button class="btn btn-dark boton" type="submit" disabled id="boton_${zapatilla.id}"  > En carrito </button>
</div>
</div>
</div> <!--AOS-->
`




  ) }

   }
}//ELSE
}

//HAGO LA FUNCION PARA AGREGAR LOS ELEMENTOS SEGUN CORRESPONDA.


agregarElementos();


//CODIGO QUE PERMITE IDENTIFICAR CADA CLICK CON SU RESPECTIVA ZAPATILLA
$(document).on("click", ".boton", function () {
  let element = $(this)[0].parentElement.parentElement;
  console.log(element);
  let id = $(element).attr("id");
  agregarCarrito(id, zapatillas, carrito);
})
//CODIGO QUE PERMITE IDENTIFICAR CADA CLICK CON SU RESPECTIVA ZAPATILLA

//FUNCION PARA AGREGAR ITEMS AL CARRITO
const agregarCarrito = function (id, zapatillas, carrito) {
  console.log(id);
  for (const zapatilla of zapatillas) {
    if (zapatilla.id == id) {

      if (zapatilla.carrito == false) {
        zapatilla.carrito = true;
        carrito.push(zapatilla);
        console.log(carrito);
        $(`#boton_${id}`).html("En el carrito");
        localStorage.setItem("carrito",JSON.stringify(carrito));
        localStorage.setItem("zapatillas", JSON.stringify(zapatillas));
    
      } 
    }
  }
}//FUNCION PARA AGREGAR ITEMS AL CARRITO






let persiste = localStorage.getItem("carrito");
console.log(persiste);