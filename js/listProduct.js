

fetch(`https://tienda-bsale-online.herokuapp.com/v1/products/all`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            const element = data[i];

            let bebidasEnergeticas = document.getElementById("bebidasEnergeticas");
            let pisco = document.getElementById("pisco");
            let ron = document.getElementById("ron");
            let bebida = document.getElementById("bebida");
            let snack = document.getElementById("snack");
            let cerveza = document.getElementById("cerveza");
            let vodka = document.getElementById("vodka");
            let productos = document.getElementById("productos");

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