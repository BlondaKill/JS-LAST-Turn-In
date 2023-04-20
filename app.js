    const shopContent = document.getElementById(id = "shopContent");
    const verCarrito = document.getElementById("verCarrito");
    const modelContainer = document.getElementById('model-container');
    const showAlert = document.getElementById('showAlert');
    const cantidadCarrito = document.getElementById('cantidadCarrito');




    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


    //render 
    //logica carrito - agregar prod al carrito

    productos.forEach((product) => {
        let content = document.createElement('div');
        content.className = "card"
        content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
    `;

        shopContent.append(content);

        let comprar = document.createElement("button");
        comprar.setAttribute('id', `${product.id}`)
        comprar.innerText = 'comprar';
        comprar.className = 'comprar';

        content.append(comprar);

        comprar.addEventListener('click', agregarAlCarrito);
    });

    const saveLocal = () => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    };

    function agregarAlCarrito(e) {

        const id = parseInt(e.target.id);

        const prodEncontrado = productos.find(p => p.id === parseInt(e.target.id));
        console.log(prodEncontrado);

        const repeat = carrito.some(p => p.id === id);

        const prodAlCarrito = {

            id: prodEncontrado.id,
            img: prodEncontrado.img,
            nombre: prodEncontrado.nombre,
            precio: prodEncontrado.precio,
            cantidad: prodEncontrado.cantidad,
        }

        if (repeat) {
            const indice = carrito.findIndex(p => p.id === id);
            carrito[indice].cantidad++;
            carrito[indice].precio = prodAlCarrito.precio * carrito[indice].cantidad;
            console.log(carrito);
        } else {
            carrito.push(prodAlCarrito);
            console.log(carrito);
            carritoCounter();

        }
        saveLocal();
    }