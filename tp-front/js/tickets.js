const valorTkt = 200;
let tickets = [];


let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let correo = document.getElementById('correo');
let cantidad = document.getElementById('cantidad');
let  o = document.getElementById('categoria');
let categoria = o.options[o.selectedIndex].text;

const nuevoTicket = {
    nombre: nombre.innerHTML,
    apellido: apellido.innerHTML,
    correo: correo.innerHTML,
    categoria: categoria.innerHTML
};

const btnResumen = document.getElementById('btnResumen');

btnResumen.addEventListener('click',()=>{
    alert(nuevoTicket.nombre,nuevoTicket.apellido,nuevoTicket.correo,nuevoTicket.categoria);
})
