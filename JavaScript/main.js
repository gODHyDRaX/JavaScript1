// localizar el nodo en del DOM
// nod: etiqueta en su archivo .html

let header_del_dom = document.querySelector(".header")
// Almacenar en una variable el contenido agregar

let header = `<p>Parqueo la bendicion
<img src="../img/spaces.png">
</p>
<nav>
<div>
<img src="../img/sedan.png">
<img src="../img/fast-delivery.png">
<img src="../img/bus.png">
<img src="../img/truck.png">
<img src="../img/ellipsis.png">
</div>
</nav>
`;

// Agregar el contenido a la referencia del DOM 

header_del_dom.innerHTML = header;

