function get(id){
    return document.getElementById(id);
}


const btnResumen = get('btnResumen');
const tickets = [];
let  valorTkt = 200;

let nombre = get('nombre');
let apellido = get('apellido');
let correo = get('correo');
let cantidad = get('cantidad');
let cat = get('categoria');
let total = get('total');
let categoria = cat.options[cat.selectedIndex].text;

//Ticket
let nuevaOrden = {
    nombre: nombre.value,
    apellido: apellido.value,
    correo: correo.value,
    cantidad: cantidad.value,
    categoria: categoria
}

//Cambio de valor cantidad, cambia el <span> total
cantidad.addEventListener('change',()=>{
    costoTickets();
})


btnResumen.addEventListener('click',()=>{
    resumenCompra();
});

//Calcular valor de los tickets
function costoTickets(){
    let cantidad = parseInt(nuevaOrden.cantidad);
    let precioTickets = cantidad * valorTkt;
    total.innerText = `Total a pagar $: ${precioTickets}`
}



//Resumen de compra

function resumenCompra(){

}
