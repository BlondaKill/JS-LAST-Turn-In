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
  
  const shopSneakers = document.getElementById(id="shopSneakers");
  const verCarrito = document.getElementById("verCarrito");
  const modelContainer = document.getElementById('model-container');

  

let carrito = [];

productos.forEach((sneak) => {
    let content = document.createElement('div');
    content.className = "card"
    content.innerHTML = `<img src="${sneak.img}">
    <h3>${sneak.nombre}</h3>
    <p class="price">${sneak.precio} $</p>
    `;

    shopSneakers.append(content);
    let buy = document.createElement("button")
    buy.innerText = 'comprar';
    buy.className = "comprar";
    
    content.append(buy);

    buy.addEventListener("click", () =>{
        carrito.push({
            id: sneak.id,
            img: sneak.img,
            nombre: sneak.nombre,
            precio: sneak.precio,
});
console.log(carrito);
});
});

verCarrito.addEventListener("click", () => {
    modelContainer.innerHTML = '';
    modelContainer.style.display = 'flex';
    const modelHeader = document.createElement('div');
    modelHeader.className = 'model-header'
    modelHeader.innerHTML = `
    <h1 class = 'model-header-title'>Cart</h1>
    `;
    modelContainer.append(modelHeader);

    const modelbutton = document.createElement('h1');
    modelbutton.innerText = 'close';
    modelbutton.className = 'model-header-button';

    modelbutton.addEventListener('click', () => {
        modelContainer.style.display = 'none';
    });


    modelHeader.append(modelbutton);

carrito.forEach((product) =>{
    let carritoContent = document.createElement('div')
    carrito.className = 'model-content';
    carritoContent.innerHTML = `
    <img src ="${product.img}">
    <h3>${product.nombre}</h3>;
    <p>${product.precio} $</p>
    

    `;
    modelContainer.append(carritoContent);
});
const total = carrito.reduce((acc, el) => acc + el.precio, 0);
const totalBuying = document.createElement('div');
totalBuying.className = 'total - content'
totalBuying.innerHTML = `total a pagar: ${total} $`;
modelContainer.append(totalBuying); 


});

