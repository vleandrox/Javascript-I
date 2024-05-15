/* let totalProducto = Number(prompt("Cuantos productos diferentes desea llevar :"));

const comprar = () =>{
    let totalApagar = 0;
    for (let i = 1; i <= totalProducto; i++) {  
        const nombre = prompt("Que producto desea llevar ? ");
        const cantidad = prompt("Cuantas unidades ? ");
        const precio = prompt("Cuanto sale cada unidad ? ");
        const subtotal = cantidad * precio;    
        totalApagar = totalApagar + subtotal;
        console.log("Has llevado " + cantidad + " unidades de " + nombre + "que costaron : "+ precio);
        console.log("El pago total es : " + totalApagar);
    }
    console.log("El Pago Total es : " + totalApagar);
}

const total1 = comprar();
const total2 = comprar();
const total3 = comprar();
const total = total1 + total2 + total3;
console.log(total); */

// const comprar = ()=> {
//     const totalApagar = 0
//     for (let index = 1; index <= 3; index++)  {
//     const nombre =prompt("¿Qué producto desea llevar?");
//     const cantidad = Number(prompt("¿Cuántas unidades?"));
//     const precio = Number(prompt("¿Cuánto sale cada unidad?"));
//     const subtotal = cantidad * precio;
//     totalApagar = totalApagar + subtotal;
//     }
//     console.log(totalApagar);
//     return totalApagar;
// }
// const total1 = comprar();
// const total2 = comprar();
// const total3 = comprar();
// const total = total1 + total2 + total3;

/**ACTIVIDAD INTEGRADORA EN EL PROYECTO */
// Establecer el estado inicial de isOnline en localStorage si no existe
if (localStorage.getItem('isOnline') === null) {
    localStorage.setItem('isOnline', 'false');
}

function renderIcons() {
    const isOnline = localStorage.getItem('isOnline') === 'true';
    const iconoUsuario = document.getElementById('iconoUsuario');
    const iconoCarrito = document.getElementById('iconoCarrito');
    const iconoPerfil = document.getElementById('iconoPerfil');

    if (isOnline) {
        iconoUsuario.classList.add('hidden');
        iconoCarrito.classList.remove('hidden');
        iconoPerfil.classList.remove('hidden');
    } else {
        iconoUsuario.classList.remove('hidden');
        iconoCarrito.classList.add('hidden');
        iconoPerfil.classList.add('hidden');
    }
}

// Asignar eventos a los iconos
document.getElementById('iconoUsuario').addEventListener('click', function() {
    localStorage.setItem('isOnline', 'true');
    renderIcons();
});

document.getElementById('iconoPerfil').addEventListener('click', function() {
    localStorage.setItem('isOnline', 'false');
    renderIcons();
});

// Llamar a renderIcons inicialmente para establecer la vista correcta al cargar
document.addEventListener('DOMContentLoaded', renderIcons);
 