const valorTkt = 200;
let tickets = [];


let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let correo = document.getElementById('correo');
let cantidad = document.getElementById('cantidad');
let  o = document.getElementById('categoria');
let categoria = o.options[o.selectedIndex].text;

let nuevoTicket = {
    nombre: nombre.innerText,
    apellido: apellido.innerText,
    correo: correo.innerText,
    categoria: categoria
};

tickets.push(JSON.stringify(nuevoTicket));

const btnResumen = document.getElementById('resumen');

btnResumen.addEventListener('click',()=>{
    alert(tickets);
})
