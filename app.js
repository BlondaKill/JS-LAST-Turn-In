

/*content = sneakers
modal = model*/

const shopSneakers = document.getElementById(id="shopSneakers");
const verCarrito = document.getElementById("verCarrito");
const modelContainer = document.getElementById('model-container');
const showAlert = document.getElementById('showAlert');
const cantidadCarrito = document.getElementById('cantidadCarrito');

  

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((sneak) => {
    let content = document.createElement('div');
    content.className = "card"
    content.innerHTML = `<img src="${sneak.img}">
    <h3>${sneak.nombre}</h3>
    <p class="price">${sneak.precio} $</p>
    `;

    shopSneakers.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = 'comprar';
    comprar.className = "comprar";
    
    content.append(comprar);

    comprar.addEventListener('click', () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === productos.id);


        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === productos.id) {
                    prod.cantidad++;
                }

            }
        
    )}
