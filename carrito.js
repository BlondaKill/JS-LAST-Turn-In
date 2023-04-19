
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

    modelHeader.append(modelbutton);

    
    carrito.forEach((product) => {
        let carritoContent = document.createElement('div');
        carritoContent.className = 'model-content';
        carritoContent.classList.add('card');
        carritoContent.style.width = '18rem';
        carritoContent.className = 'model-content';
        carritoContent.innerHTML = `<div class = 'card-body'> 


        
            <img src = "${product.img}">
            <h5 class = 'card-title'> ${product.nombre} </h5>;
            <p class = 'card-text'>${product.precio}</p>
            <h3>${product.nombre}</h3>;
            <p>${product.precio} $</p>
            <span class = 'restar'> - </span>
            <p>Cantidad: ${product.cantidad} $</p>
            <span class = 'sumar'> + </span>
            <p>Total: ${product.cantidad * product.precio} $</p>
            <span class = 'sumar'> + </span>;
            <p>Total: ${product.cantidad * product.precio} $</P>
            </div> `;

        modelContainer.append(carritoContent);
        //console.log(carrito.length);

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
        eliminar.className = 'delete-product';
        carritoContent.append(eliminar);

        eliminar.addEventListener('click', eliminarProducto);
    });
    };   

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement('div');
    totalBuying.className = 'total - content'
    totalBuying.innerHTML = `total a pagar: ${total} $`;
    modelContainer.append(totalBuying);
;

verCarrito.addEventListener('click', pintarCarrito)

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

const carritoLenght = carrito.length;
    localStorage.setItem('carrito.lenght', JSON.stringify(carritoLenght));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem('carritoLenght'));
};

carritoCounter();