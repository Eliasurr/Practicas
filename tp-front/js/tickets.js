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
let categoria = cat.options[cat.selectedIndex].text;


btnResumen.addEventListener('click',()=>{
    crearOrden();
});


function crearOrden(){
    let nuevoTicket = {
        nombre: nombre.value,
        apellido: apellido.value,
        correo: correo.value,
        cantidad: cantidad.value,
        categoria: categoria
    }
    let ticketFinal = JSON.stringify(nuevoTicket);
    tickets.push(ticketFinal);
    localStorage.setItem('ticket',ticketFinal);
    alert(tickets);
}