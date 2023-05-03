const pintarCarrito = () => {

    modelContainer.innerHTML = '';
    modelContainer.style.display = 'flex';
    const modelHeader = document.createElement('div');
    modelHeader.className = 'model-header';
    modelHeader.innerHTML = `
    <h1 class = 'model-header-title'>Your Cart</h1>
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
        carritoContent.classList.add('card');
        carritoContent.style.width = '18rem';
        carritoContent.className = 'model-content';
        carritoContent.innerHTML = `<div class = 'card-body'> 
            <img class = "imgCardCarrito" src = "${product.img}">
            <h5 class = 'card-title'> ${product.nombre} </h5>
            <p class = 'card-text'>${product.precio}</p>
            <div class = "cardCarritoContMm">
            <span class = 'restar'> - </span>
            <p>Cantidad: ${product.cantidad}</p>
            <span class = 'sumar'> + </span>
            </div>
            <p>Total: ${product.cantidad * product.precio} $</p>
            <span class = 'delete-product'>🗑️</span> 
            </div> `;

        modelContainer.append(carritoContent);
        

        let restar = carritoContent.querySelector('.restar');

        restar.addEventListener("click", () => {
            if (product.cantidad > 1) {
                product.cantidad --;

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Eliminaste una ${product.nombre} de tu 🛒 !`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                 
            saveLocal();
            pintarCarrito();
            mySound.play();
        }else{
            eliminarProducto(product.id);
        }
    });

        let sumar = carritoContent.querySelector('.sumar');

        sumar.addEventListener("click", () => {

            product.cantidad++;

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Agregaste otra ${product.nombre} a tu 🛒!`,
                showConfirmButton: false,
                timer: 1500
            })
      
            myAudio.play();
            saveLocal();
            pintarCarrito();
        });

        let eliminar = carritoContent.querySelector('.delete-product');
        eliminar.addEventListener('click', () => {
            eliminarProducto(product.id);
        })
        eliminar.addEventListener('click', eliminarProducto);
    });
    
};

const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

const totalBuying = document.createElement('div');
totalBuying.className = 'total - content'
totalBuying.innerHTML = `total a pagar: ${total} $`;
modelContainer.append(totalBuying);;
verCarrito.addEventListener('click', pintarCarrito)

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

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