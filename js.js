
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


        

    //