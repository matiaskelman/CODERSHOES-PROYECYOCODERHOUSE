//RESETEO VALORES PARA QUE LA PROXIMA UTILIZACION DEL SITIO SEA COMO NUEVA.
carrito = JSON.parse(localStorage.getItem("carrito"));
console.log("Carrito: " + carrito.length);
carrito = [];
const zaptillas = [];
console.log("Carrito: " + carrito.length);
localStorage.setItem("carrito",JSON.stringify(carrito));
localStorage.setItem("zapatillas",JSON.stringify(zaptillas));
//RESETEO VALORES PARA QUE LA PROXIMA UTILIZACION DEL SITIO SEA COMO NUEVA.