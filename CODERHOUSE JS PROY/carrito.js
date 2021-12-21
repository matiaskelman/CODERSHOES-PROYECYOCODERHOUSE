


//RECIBO EL LOCALSTORAGE CON LOS ITEMS DEL CARRITO

let compra = [];
if (localStorage.getItem("carrito") != null) {
  compra = localStorage.getItem("carrito");
  compra = JSON.parse(compra);
}


//RECIBO EL LOCALSTORAGE CON LOS ITEMS DEL CARRITO

//INICIALIZO UNA VARIABLE "PRECIO"
let precio = 0;
//INICIALIZO UNA VARIABLE "PRECIO"

//FUNCION QUE ME PERMITE AGRGAR UN BUTTON QUE AL CLICKEARLO LLAMA A LA FUNCION "PAGO()"
const agregarBoton = function () {
  $("#Title").append(
  
  
    `<button type="button" class="btn btn-primary text-center"  onclick="pago()">Avanzar a pago</button> `
    
    )
  }
//FUNCION QUE ME PERMITE AGRGAR UN BUTTON QUE AL CLICKEARLO LLAMA A LA FUNCION "PAGO()"


//HAGO LA FUNCION PARA AGREGAR LOS ELEMENTOS SEGUN CORRESPONDA.
const agregarItem = function() {
//Chekcear
if ((compra.length == 0) || (compra == null)){
    $("#Titulo").append(`
    <div class="jumbotron jumbotron-fluid mx-5 my-5"data-aos="zoom-in" data-aos-duration="1000">
    <div class="container">
      <h1 class="display-4">¡Primero agregue items!</h1>
      <p class="lead">Para poder proceder al pago primero debe <b> añadir zapatillas al carrito</b>!</p>
    </div>
  </div>
  `);
} //Chekcear

else {

for (const zapatilla of compra){
  $("#Titulo").append(  `
  <div class="card text-center mx-5 my-5" style="width: 18rem;" id="${zapatilla.id}">
<img class="card-img-top imagen-tamano" src="img/Zapatillas${zapatilla.id}.png" alt="Card image cap">
<div class="card-body">
<h5 class="card-title">${zapatilla.nombre}</h5>
<p class="card-text">USD${zapatilla.precio}</p>
<button class="btn btn-danger boton" type="submit" id="boton_${zapatilla.id}" onclick="eliminar(${zapatilla.id})"  >Eliminar</button>
</div>
</div>
`)
precio = precio + zapatilla.precio; 
console.log(zapatilla.nombre);
}  $("#H1H2").append(
    `<h1 class = "Titulo text-center" style="font-family: 'Bebas Neue', cursive;
    font-family: 'Mukta', sans-serif;">  Monto: US$${precio}
    </h1>`
  ) 
  agregarBoton();
} }
//HAGO LA FUNCION PARA AGREGAR LOS ELEMENTOS SEGUN CORRESPONDA.

agregarItem();






//FUNCION QUE ME PERMITE ELIMINAR ITEMS DEL CARRITO.
console.log(precio);
const eliminar = function (id){
  let i = 0;
for (const zapatilla of compra) {
  i++;
  if (zapatilla.id == id){
    compra= compra.filter(zapatilla => zapatilla.id != id) ;
    localStorage.setItem("carrito",JSON.stringify(compra));
    console.log("AAAa");
    $("#Titulo").html("") ;
    agregarItem();
    console.log(compra);
    // NUEVO
    const zapatillas = JSON.parse(localStorage.getItem("zapatillas"))
    for (const zapatilla of zapatillas) {
    if (zapatilla.id == id ) {
    zapatilla.carrito = false;
    localStorage.setItem("zapatillas", JSON.stringify(zapatillas))
    break;
    }
    else {
      continue;
    }
    // FIN NUEVO
    }
    precio = precio - zapatilla.precio;
    location.reload();
  
    break;
  }
}

}
//FUNCION QUE ME PERMITE ELIMINAR ITEMS DEL CARRITO.

//FUNCION QUE ME PERMITE ACTUALIZAR TODO EL BODY (SPA). PASA A LA VISTA DEL PAGO.
const pago = function(){
 console.log("pago");
 $(".cuerpo").html(`
 
 <nav class="navbar navbar sticky-top navbar-expand-lg navbar navbar-dark bg-light">
    <a class="navbar-brand" href="#"><img src="img/Logo.png" width="60"  alt=""></a>
    <button class="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        
        <div class="mx-auto"></div>
        <a  style='color: black;'class="nav-item nav-link active" id="home" href="index.html">SNKRS <span class="sr-only">(current)</span></a>
       
      </div>

        <a style='color: black;' class="nav-item nav-link ml-auto" href="carrito.html"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
          <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
        </svg></a>
        
      </div>
    </div>
  </nav>

 <div class="container">

    <div class="row justify-content-left" id="Titulo">
    <div class=col-md-4>
    <div class= "card text-center mx-3 my-3" data-aos="flip-up" data-aos-duration="1000"  >
    <form id="form">
    <h3>Resumen de la compra:</h3>
    </form>
    <h4>Total: USD ${precio}</h4>
    </div>
    </div>
    <div class="col-md-4" id="row-2">
    <div class= "card text-center mx-3 my-3" data-aos="flip-down" data-aos-duration="1000" >
    <form action= "fin.html"id="form">
    <h3>Pago:</h3>
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Correo electronico</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ej: contacto@codershoes.com" required>
  </div>



  <div class="form-group">
  <label for="exampleInputEmail1">Nombre</label>
  <input class="form-control" type="text" placeholder="Ej: Adrian" required>
  </div>

  <div class="form-group">
  <label for="exampleInputEmail1">Apellido</label>
  <input class="form-control" type="text" placeholder="Ej: Gonzalez" required>
  </div>

  <div class="form-group">
  <label for="exampleInputEmail1">Direccion de envio</label>
  <input class="form-control" type="text" placeholder="Ej: Av.GermanCuevas 25315" required>
  </div>

  <div class="form-group">
  <label for="exampleInputEmail1">Numero de tarjeta</label>
  <input class="form-control" type="text" placeholder="Ej: 1234-1234" required>
  </div>


  <div class="form-group">
    <label for="exampleInputPassword1">Codigo de seguridad</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="" required>
    <small id="emailHelp" class="form-text text-muted">Este dato no sera compartido con terceros.</small>
    </div>
  
  <div class="form-check ">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" required>
  <label class="form-check-label" for="inlineCheckbox1">Acepto los terminos y condiciones</label>
  <small id="emailHelp" class="form-text text-muted"> Es obligatorio aceptar este campo para poder continuar. <br> </small>
</div>


<div> 
 <button  class="btn btn-success my-2">  Comprar</button> </div> 

</form>

    </form>
    </div>
    
    
  </div>`) 
  for (const zapatilla of compra){
    $("#form").append(  `
    <h5> USD ${zapatilla.precio} : ${zapatilla.nombre} </h5>
  
  `)
}
}
//FUNCION QUE ME PERMITE ACTUALIZAR TODO EL BODY (SPA). PASA A LA VISTA DEL PAGO.
