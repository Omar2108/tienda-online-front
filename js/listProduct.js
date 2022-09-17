const buscador = document.getElementById("buscador");
const btnBuscar = document.getElementById("btnBuscar");
const productos = document.getElementById("productos");

//funcion para mostrar los datos en pantalla

const mostrarDatos = () => {
    fetch(`https://tienda-bsale-online.herokuapp.com/v1/products/all`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                const element = data[i];

                //pinto en pantalla los datos 

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


                divImage.src = element.urlImage;
                nombre.textContent = element.name;
                precio.textContent = element.price;

                div.appendChild(divImage);
                div.appendChild(nombre);
                div.appendChild(precio);

                //organizo los productos de acuerdo a la categoria que pertenecen y los pinto en pantalla
                switch (element.category) {
                    case "1":
                        div.classList.add("product-item");
                        div.setAttribute("category", "debidaEnergetica");
                        productos.appendChild(div);

                        break;
                    case "2":
                        div.classList.add("product-item");
                        div.setAttribute("category", "pisco");
                        productos.appendChild(div);


                        break;
                    case "3":
                        div.classList.add("product-item");
                        div.setAttribute("category", "ron");
                        productos.appendChild(div);


                        break;
                    case "4":
                        div.classList.add("product-item");
                        div.setAttribute("category", "bebida");
                        productos.appendChild(div);


                        break;
                    case "5":
                        div.classList.add("product-item");
                        div.setAttribute("category", "snack");
                        productos.appendChild(div);


                        break;
                    case "6":
                        div.classList.add("product-item");
                        div.setAttribute("category", "cerveza");
                        productos.appendChild(div);

                        break;
                    case "7":
                        div.classList.add("product-item");
                        div.setAttribute("category", "vodka");
                        productos.appendChild(div);

                        break;
                    default:
                        break;
                }


            }


        });

}

mostrarDatos();


//funcion para buscar uno o varios productos de acuerdo al nombre del producto ingresado
function filtrar() {

    productos.innerHTML = "";

    fetch(`https://tienda-bsale-online.herokuapp.com/v1/products/filter/${buscador.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            //valido si se encontro algun registro
            if (data.length > 0) {

                //se recorren los datos obtenidos 
                for (let i = 0; i < data.length; i++) {
                    const element = data[i];

                    //Se pinta en pantalla los datos encontrados
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


            } else {
                //mensaje de error que no se encontro ningun registro
                alert("¡EL PROUDUCTO NO SE ENCUENTRA DISPONIBLE EN EL MOMENTO...!");
                mostrarDatos();
            }


        });



}

//agrego el evento filtrar al btn buscar
btnBuscar.addEventListener("click", filtrar);