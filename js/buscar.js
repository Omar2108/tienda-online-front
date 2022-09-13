const buscador = document.getElementById("buscador");
const btnBuscar = document.getElementById("btnBuscar");
const btnLimpliar = document.getElementById("btnLimpiar");

const filtrar = () => {

    fetch(`https://tienda-bsale-online.herokuapp.com/v1/products/filter/${buscador.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                const element = data[i];

                let productos = document.getElementById("productosBuscar");

                let div = document.createElement("div");
                let divImage = document.createElement("img");
                let nombre = document.createElement("p");
                let precio = document.createElement("p");

                div.style.width = "200px";
                div.style.height = "250px";
                div.style.border = "1px solid black";
                div.style.textAlign = "center";
                div.style.margin = "10px";
                divImage.style.width = "120px";
                divImage.style.height = "130px";


                divImage.src = element[2];
                nombre.textContent = element[1];
                precio.textContent = element[3];

                div.appendChild(divImage);
                div.appendChild(nombre);
                div.appendChild(precio);

                productos.appendChild(div);


            }
        });

}

btnBuscar.addEventListener("click", filtrar);

const limpiarBusqueda = ()=>{
    location.reload();

}

btnLimpliar.addEventListener("click", limpiarBusqueda);