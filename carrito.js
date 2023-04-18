const productos = [
    {id : 1, nombre: 'Bart', precio: 120, 
    img: src= "../img/bart.jpeg"},
    {id : 2,nombre: 'Fire', precio: 150, 
    img: src= "../img/fuego.png"},
    {id : 3, nombre: 'Kurt', precio: 150,
    img: src= "../img/kurt.jpeg"},
    {id : 4,nombre: 'DC', precio: 250,
    img: src= "../img/rainbow.png"},
    {id : 5, nombre: 'Joker', precio: 150,
    img: src= "../img/joker.jpg"},
      ];
  
  
    

    comprar.addEventListener("click", () =>{
        carrito.push({
            id: sneak.id,
            img: sneak.img,
            nombre: sneak.nombre,
            precio: sneak.precio,
});

SaveLocal();

});

/*======aca va */
const pintarCarrito = () => {
    modelContainer.innerHTML = '';
    modelContainer.style.display = 'flex';
    const modelHeader = document.createElement('div');
    modelHeader.className = 'model-header';
    modelHeader.innerHTML = `
    <h1 class = 'model-header-title'>Cart</h1>
    `;
    modelContainer.append(modelHeader);

    const modelbutton = document.createElement('h1');
    modelbutton.innerText = 'x';
    modelbutton.className = 'model-header-button';

    modelbutton.addEventListener('click', () => {
    modelContainer.style.display = 'none';
    });

/*============================ */

    modelHeader.append(modelbutton);

    carrito.forEach((product) =>{
    let carritoContent = document.createElement('div');
    carrito.className = 'model-content';
    carritoContent.innerHTML = `
    <img src ="${product.img}">
    <h3>${product.nombre}</h3>;
    <p>${product.precio} $</p>
    <span class = 'restar'> - </span>
    <p>Cantidad: ${product.cantidad} $</p>
    <span class = 'sumar'> + </span>
    <p>Total: ${product.cantidad * product.precio} $</p>
    `;

    modelContainer.append(carritoContent);


    let restar = carritoContent.querySelector('.restar');
    restar.addEventListener("click", () => {
        if (product.cantidad !== 1) {
        /*console.log('restar')*/
        product.cantidad - 1;
        }
        saveLocal();
        pintarCarrito();
    });


    let sumar = carritoContent.querySelector('.sumar');
    sumar.addEventListener("click", () => {
        product.cantidad + 1;
        saveLocal();
        pintarCarrito();
        });
        

    let eliminar = document.createElement('span');
    eliminar.innerText = "❌";
    eliminar.classList = 'delete-product';
    carritoContent.append (eliminar);

    eliminar.addEventListener('click', eliminarProducto);
});

const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

const totalBuying = document.createElement('div');
totalBuying.className = 'total - content'
totalBuying.innerHTML = `total a pagar: ${total} $`;
modelContainer.append(totalBuying); 
};

verCarrito.addEventListener('click', pintarCarrito);

const eliminarProducto = () => {
const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    carritoCounter();
    saveLocal();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = 'block';

    const carritoLenght= carrito.length;
localStorage.setItem('carrito.lenght', JSON.stringify(carritoLenght));

    cantidadCarrito.innerText = cJSON.parse(localStorage.getItem('carritoLenght'));
};

carritoCounter();