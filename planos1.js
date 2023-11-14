// JavaScript para mostrar/ocultar contenido al hacer clic en los botones
 const unifamiliarButton = document.getElementById("unifamiliarButton");
 const multifamiliarButton = document.getElementById("multifamiliarButton");
 //const comercialButton = document.getElementById("comercialButton");

unifamiliarButton.addEventListener("click", () => {
    unifamiliarContent.style.display = "block";
    multifamiliarContent.style.display = "none";
    //comercialContent.style.display = "none";
});

multifamiliarButton.addEventListener("click", () => {
    unifamiliarContent.style.display = "none";
    multifamiliarContent.style.display = "block";
    //comercialContent.style.display = "none";
});

// comercialButton.addEventListener("click", () => {
//     unifamiliarContent.style.display = "none";
//     multifamiliarContent.style.display = "none";
//     comercialContent.style.display = "block";
// });

// // Obtén los elementos de los select
// const anchoSelect = document.getElementById("ancho");
// const largoSelect = document.getElementById("largo");

// // Agrega un evento de cambio al select de "Ancho"
// anchoSelect.addEventListener("change", function () {
//     // Borra todas las opciones actuales en "Largo"
//     while (largoSelect.options.length > 0) {
//         largoSelect.remove(0);
//     }

//     // Obtiene el valor seleccionado en "Ancho"
//     const selectedAncho = anchoSelect.value;

//     // Agrega las opciones correspondientes a "Largo" según la selección de "Ancho"
//     if (selectedAncho === "6") {
//         largoSelect.add(new Option("17 metros", "17"));
//         largoSelect.add(new Option("18 metros", "18"));
//     } else if (selectedAncho === "8") {
//         largoSelect.add(new Option("15 metros", "15"));
//         largoSelect.add(new Option("16 metros", "16"));
//     }
// });

// let casasRegistradas = []; // Un arreglo para almacenar información de casas registradas
// let imagenSrc; // Declara la variable imagenSrc
// function mostrarImagen() {
//     const ancho = document.getElementById("ancho").value;
//     const largo = document.getElementById("largo").value;
//     const escalera = document.getElementById("escalera").value;
//     const cuartos = document.getElementById("cuartos").value;
//     const banos = document.getElementById("banos").value;
//     const sala = document.getElementById("sala").value;
//     const comedor = document.getElementById("comedor").value;
//     const cocina = document.getElementById("cocina").value;
//     const lavanderia = document.getElementById("lavanderia").value;

//     // Obtener la ruta de la imagen correspondiente a las condiciones


//     const infoCasa = {
//         ancho: document.getElementById("ancho").value,
//         largo: document.getElementById("largo").value,
//         escalera: document.getElementById("escalera").value,
//         cuartos: document.getElementById("cuartos").value,
//         banos: document.getElementById("banos").value,
//         sala: document.getElementById("sala").value,
//         comedor: document.getElementById("comedor").value,
//         cocina: document.getElementById("cocina").value,
//         lavanderia: document.getElementById("lavanderia").value,
//     };
//     casasRegistradas.push(infoCasa);

//     // Limpia y vuelve a mostrar la lista de casas registradas
//     const listaCasas = document.getElementById("listaCasasRegistradas");

//     listaCasas.innerHTML = "";
//     casasRegistradas.forEach((casa, index) => {
//         const elementoLista = document.createElement("li");
//         elementoLista.textContent = `piso ${index + 1} - Ancho: ${casa.ancho}, Largo: ${casa.largo}, Cuartos: ${casa.cuartos}, Baños: ${casa.banos}`;
//         listaCasas.appendChild(elementoLista);

//     });
//     const imagen = document.getElementById("imagen");
//     const formulario = document.getElementById("formulario");

//     if (imagenSrc === "") {
//         formulario.style.display = "block";
//         alert("La información solicitada aún no está disponible. Le daremos una respuesta en breve.");
//         imagen.style.display = "none";
//     } else {
//         imagen.src = imagenSrc;
//         imagen.style.display = "block";
//     }
//     document.getElementById("descargarButton").style.display = "block";

// }
// function descargarPDF() {
//     const ancho = document.getElementById("ancho").value;
//     const largo = document.getElementById("largo").value;
//     const escalera = document.getElementById("escalera").value;
//     const cuartos = document.getElementById("cuartos").value;
//     const banos = document.getElementById("banos").value;
//     const sala = document.getElementById("sala").value;
//     const comedor = document.getElementById("comedor").value;
//     const cocina = document.getElementById("cocina").value;
//     const lavanderia = document.getElementById("lavanderia").value;
//     if (imagenSrc === "") {
//         alert("Proceso interrumpido por falta de datos");
//         return;
//     }

//     // Generar la URL del archivo generarPDF.php con los parámetros y la URL de la imagen
//     const pdfURL = `../sistema/pdf.php?ancho=${ancho}&largo=${largo}&escalera=${escalera}&cuartos=${cuartos}&banos=${banos}&sala=${sala}&comedor=${comedor}&cocina=${cocina}&lavanderia=${lavanderia}&imagen=${imagenSrc}`;

//     // Abrir una nueva pestaña hacia la URL
//     window.open(pdfURL, "_blank");
// }
function pasarelaPagos() {
    alert("===>PASARELA DE PAGOS");

}
function VersionPremiun() {
    alert("Esta Opcion aun no esta Disponible en la Version Gratuita");

}
// Obtén los elementos de los select
const anchoSelect2 = document.getElementById("ancho2");
const largoSelect2 = document.getElementById("largo2");
const escaleraSelect2 = document.getElementById("escalera2");
const cuartoSelect2 = document.getElementById("cuartos2");
const banosSelect2 = document.getElementById("banos2");
const terrazaSelect2 = document.getElementById("terraza2");

// Agrega un evento de cambio al select de "Ancho"
anchoSelect2.addEventListener("change", actualizarOpciones);
largoSelect2.addEventListener("change", actualizarOpciones);
function actualizarOpciones() {
    // Borra todas las opciones actuales en "Largo", "Escalera", "Cuartos", "Baños" y "Terraza"
    while (largoSelect2.options.length > 0) {
        largoSelect2.remove(0);
    }
    while (escaleraSelect2.options.length > 0) {
        escaleraSelect2.remove(0);
    }
    while (cuartoSelect2.options.length > 0) {
        cuartoSelect2.remove(0);
    }
    
    while (banosSelect2.options.length > 0) {
        banosSelect2.remove(0);
    }
    while (terrazaSelect2.options.length > 0) {
        terrazaSelect2.remove(0);
    }

    // Obtiene el valor seleccionado en "Ancho" y "Largo"
    const selectedAncho2 = anchoSelect2.value;
   
    // console.log("que error",escaleraSelect2)
    // Agrega las opciones correspondientes a "Largo" según la selección de "Ancho"
    if (selectedAncho2 === "6") {
        largoSelect2.add(new Option("17 metros", "17"));
        // 
        escaleraSelect2.add(new Option("Fondo","3"));
        cuartoSelect2.add(new Option("2"));
        banosSelect2.add(new Option("1"));
        terrazaSelect2.add(new Option("si","Si"));
        
        
        
    } else if (selectedAncho2 === "7") {
        largoSelect2.add(new Option("18 metros", "18"));
        // 
        escaleraSelect2.add(new Option("Medio","2"));
        cuartoSelect2.add(new Option("4"));
        terrazaSelect2.add(new Option("si","Si"));
        banosSelect2.add(new Option("2"));
    } else if (selectedAncho2 === "8") {
        largoSelect2.add(new Option("15 metros", "15"));
        //
        escaleraSelect2.add(new Option("Medio","2"));
        cuartoSelect2.add(new Option("3"));
        terrazaSelect2.add(new Option("no","No"));
        banosSelect2.add(new Option("2"));
        
    }

    // Agregar más condiciones aquí para otras combinaciones de "Ancho" y "Largo" si es necesario.
}

// function mostrarImagen2() {
//     /*const ancho2 = anchoSelect2.value;
//     const largo2 = largoSelect2.value;
//     const escalera2 = escaleraSelect2.value;
//     const cuartos2 = cuartoSelect2.value;
//     const Terraza2 = terrazaSelect2.value;
//     const banos2 = banosSelect2.value;*/
//     const ancho2 = anchoSelect2.value;
//     const largo2 = largoSelect2.value;
//     const escalera2 = escaleraSelect2.value;
//     const cuartos2 = cuartoSelect2.value;
//     const Terraza2 = terrazaSelect2.value;
//     const banos2 = banosSelect2.value;
//     const sala2 = document.getElementById("sala2").value;
//     const comedor2 = document.getElementById("comedor2").value;
//     const cocina2 = document.getElementById("cocina2").value;
//     const lavanderia2 = document.getElementById("lavanderia2").value;

//     // Obtener la ruta de la imagen correspondiente a las condiciones
//     let imagenSrc2 = "";
//     if (
//         ancho2 === "6" &&
//         largo2 === "17" &&
//         escalera2 === "2" &&
//         cuartos2 === "4" &&
//         Terraza2 === "Si" &&
//         banos2 === "2" &&
//         sala2 === "si" &&
//         comedor2 === "si" &&
//         cocina2 === "si" &&
//         lavanderia2 === "si"
//     ) {
//         imagenSrc2 = "http://procero.tech/wp-content/uploads/2023/10/2-2_page-0001.webp"; // Reemplaza con la URL de la primera imagen
//     } else if (
//         ancho2 === "6" &&
//         largo2 === "17" &&
//         escalera2 === "2" &&
//         cuartos2 === "4" &&
//         Terraza2 === "Si" &&
//         banos2 === "2" &&
//         sala2 === "si" &&
//         comedor2 === "si" &&
//         cocina2 === "si" &&
//         lavanderia2 === "si"
//     ) {
//         imagenSrc2 = "http://procero.tech/wp-content/uploads/2023/10/14-14_page-0001.webp"; // Reemplaza con la URL de la segunda imagen
//     } else if (
//         ancho2 === "7" &&
//         largo2 === "18" &&
//         escalera2 === "2" &&
//         cuartos2 === "4" &&
//         Terraza2 === "Si" &&
//         banos2 === "2" &&
//         sala2 === "si" &&
//         comedor2 === "si" &&
//         cocina2 === "si" &&
//         lavanderia2 === "si"
//     ) {
//         // Tercer caso
//         imagenSrc2 = "http://procero.tech/wp-content/uploads/2023/10/15-15_page-0001.webp"; // Reemplaza con la URL de la tercera imagen
//     } else if (
//         ancho2 === "6" &&
//         largo2 === "17" &&
//         escalera2 === "2" &&
//         cuartos2 === "5" &&
//         Terraza2 === "Si" &&
//         banos2 === "2" &&
//         sala2 === "si" &&
//         comedor2 === "si" &&
//         cocina2 === "si" &&
//         lavanderia2 === "si"
//     ) {

//         imagenSrc2 = "http://procero.tech/wp-content/uploads/2023/10/3-3-pdf-1.webp"; // Reemplaza con la URL de la cuarta imagen
//     } else if (
//         anchoSelect2 === "8" &&
//         largoSelect2 === "15" &&
//         escaleraSelect2 === "3" &&
//         cuartoSelect2 === "3" &&
//         banosSelect2 === "3" &&
//         sala2 === "si" &&
//         comedor2 === "si" &&
//         cocina2 === "si" &&
//         lavanderia2 === "si"
//     ) {
//         imagenSrc2 = "http://procero.tech/wp-content/uploads/2023/09/9_page-0001-scaled.webp"; // Reemplaza con la URL de la primera imagen
//     } else if (
//         ancho2 === "8" &&
//         largo2 === "15" &&
//         escalera2 === "3" &&
//         cuartos2 === "3" &&
//         banos2 === "2" &&
//         sala2 === "si" &&
//         comedor2 === "si" &&
//         cocina2 === "si" &&
//         lavanderia2 === "si"
//     ) {
//         imagenSrc2 = "http://procero.tech/wp-content/uploads/2023/09/8_page-0001-scaled.webp"; // Reemplaza con la URL de la segunda imagen
//     } else if (
//         ancho2 === "8" &&
//         largo2 === "15" &&
//         escalera2 === "2" &&
//         cuartos2 === "2" &&
//         banos2 === "2" &&
//         sala2 === "si" &&
//         comedor2 === "si" &&
//         cocina2 === "si" &&
//         lavanderia2 === "si"
//     ) {

//         imagenSrc2 = "http://procero.tech/wp-content/uploads/2023/09/6_page-0001-scaled.webp"; // Reemplaza con la URL de la tercera imagen
//     } else if (
//         ancho2 === "8" &&
//         largo2 === "15" &&
//         escalera2 === "2" &&
//         cuartos2 === "3" &&
//         banos2 === "1" &&
//         sala2 === "si" &&
//         comedor2 === "si" &&
//         cocina2 === "si" &&
//         lavanderia2 === "si"
//     ) {

//         imagenSrc2 = "http://procero.tech/wp-content/uploads/2023/09/5_page-0001-scaled.webp"; // Reemplaza con la URL de la cuarta imagen
//     } else if (
//         ancho2 === "8" &&
//         largo2 === "15" &&
//         escalera2 === "2" &&
//         cuartos2 === "3" &&
//         banos2 === "2" &&
//         sala2 === "si" &&
//         comedor2 === "si" &&
//         cocina2 === "si" &&
//         lavanderia2 === "si"
//     ) {

//         imagenSrc2 = "http://procero.tech/wp-content/uploads/2023/09/4_page-0001-scaled.webp"; // Reemplaza con la URL de la quinta imagen
//     } else if (
//         ancho2 === "8" &&
//         largo2 === "15" &&
//         escalera2 === "1" &&
//         cuartos2 === "3" &&
//         banos2 === "2" &&
//         sala2 === "si" &&
//         comedor2 === "si" &&
//         cocina2 === "si" &&
//         lavanderia2 === "si"
//     ) {

//         imagenSrc2 = "http://procero.tech/wp-content/uploads/2023/09/3_page-0001-scaled.webp"; // Reemplaza con la URL de la sexta imagen
//     } else if (
//         ancho2 === "8" &&
//         largo2 === "15" &&
//         escalera2 === "1" &&
//         cuartos2 === "2" &&
//         banos2 === "2" &&
//         sala2 === "si" &&
//         comedor2 === "si" &&
//         cocina2 === "si" &&
//         lavanderia2 === "si"
//     ) {

//         imagenSrc2 = "http://procero.tech/wp-content/uploads/2023/09/2_page-0001-scaled.webp"; // Reemplaza con la URL de la séptima imagen
//     } else if (
//         ancho2 === "6" &&
//         largo2 === "17" &&
//         escalera2 === "3" &&
//         cuartos2 === "3" &&
//         banos2 === "3" &&
//         sala2 === "si" &&
//         comedor2 === "si" &&
//         cocina2 === "si" &&
//         lavanderia2 === "si"
//     ) {
//         imagenSrc2 = "http://procero.tech/wp-content/uploads/2023/10/1-1_page-0001-1.webp"; // Reemplaza con la URL de la primera imagen
//     }
function mostrarImagen2() {
    const ancho2 = anchoSelect2.value;
    const largo2 = largoSelect2.value;
    const escalera2 = escaleraSelect2.value;
    const cuartos2 = cuartoSelect2.value;
    const Terraza2 = terrazaSelect2.value;
    const banos2 = banosSelect2.value;
    const sala2 = document.getElementById("sala2").value;
    const comedor2 = document.getElementById("comedor2").value;
    const cocina2 = document.getElementById("cocina2").value;
    const lavanderia2 = document.getElementById("lavanderia2").value;
    
    // Obtener la ruta de la imagen correspondiente a las condiciones
    let imagenSrc2 = "";
        //PLANO 1
    if (
        ancho2 === "6" &&
        largo2 === "17" &&
        escalera2 === "2" &&
        cuartos2 === "4" &&
        Terraza2 === "Si" &&
        banos2 === "2" &&
        sala2 === "si" &&
        comedor2 === "si" &&
        cocina2 === "si" &&
        lavanderia2 === "si"
    ) {
        
        imagenSrc2 = ""; // URL de la primera imagen
    }
    // PLANO 2
    else if (
        ancho2 === "6" &&
        largo2 === "17" &&
        escalera2 === "3" &&
        cuartos2 === "2" &&
        Terraza2 ==="Si"&&
        banos2 === "1" &&
        sala2 === "si" &&
        comedor2 === "si" &&
        cocina2 === "si" &&
        lavanderia2 === "si"
    ) {
        imagenSrc2 = ""; // Reemplaza con la URL de la segunda imagen
     }
    //plano 3
    else if (
        ancho2 === "8" &&
        largo2 === "15" &&
        escalera2 === "2" &&
        cuartos2 === "3" &&
        Terraza2 === "No" &&
        banos2 === "2" &&
        sala2 === "si" &&
        comedor2 === "si" &&
        cocina2 === "si" &&
        lavanderia2 === "si"
    ) {
        imagenSrc2 = ""; // URL de la tercera imagen
    }
    //PLANO 4
    else if (
        ancho2 === "7" &&
        largo2 === "18" &&
        escalera2 === "2" &&
        cuartos2 === "4" &&
        Terraza2 === "Si" &&
        banos2 === "2" &&
        sala2 === "si" &&
        comedor2 === "si" &&
        cocina2 === "si" &&
        lavanderia2 === "si"
    ) {
        imagenSrc2 = ""; // Reemplaza con la URL de la cuarta imagen
    }
    

    const imagen2 = document.getElementById("imagen2")
    if (imagenSrc2 === "") {
        imagen2.style.display = "none"; // Ocultar la imagen si no se encontró una correspondencia
    } else {
        const imagen = document.getElementById("imagen");
        const formulario = document.getElementById("formulario");
        imagen2.src = imagenSrc2;
        imagen2.style.display = "block"; // Mostrar la imagen
        document.getElementById("descargarButton").style.display = "block";
    }
    document.getElementById("descargarButton2").style.display = "block";
}


function descargarPDF2() {
    const ancho2 = document.getElementById("ancho2").value;
    const largo2 = document.getElementById("largo2").value;
    const escalera2 = document.getElementById("escalera2").value;
    const cuartos2 = document.getElementById("cuartos2").value;
    const Terraza2 = document.getElementById("Terraza2").value;
    const banos2 = document.getElementById("banos2").value;
    const sala2 = document.getElementById("sala2").value;
    const comedor2 = document.getElementById("comedor2").value;
    const cocina2 = document.getElementById("cocina2").value;
    const lavanderia2 = document.getElementById("lavanderia2").value;

    if (imagenSrc2 === "") {
        alert("Proceso interrumpido por falta de datos");
        return;
    }

    // Generar la URL del archivo generarPDF.php con los parámetros y la URL de la imagen
    const pdfURL = `../sistema/pdf.php?ancho2=${ancho2}&largo2=${largo2}&escalera2=${escalera2}&cuartos2=${cuartos2}&terraza2=${Terraza2}&banos2=${banos2}&sala2=${sala2}&comedor2=${comedor2}&cocina2=${cocina2}&lavanderia2=${lavanderia2}&imagen2=${imagenSrc2}`;

    // Abrir una nueva pestaña hacia la URL
    window.open(pdfURL, "_blank");
}
//--------------------------------------------------
// functions
//--------------------------------------------------
// function generarFormulario(id, numeroPiso) {
//     const contenedor = document.createElement("div");
//     if (!contenedor) return console.error("Elemento contenedor no existe");

//     const selectCuartosElement = `
//         <label for="cuartos-${numeroPiso}">Cuartos:</label>
//         <select id="cuartos-${numeroPiso}">
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//         </select>
//     `;

//     const selectBanosElement = `
//         <label for="banos-${numeroPiso}">Baños:</label>   
//         <select id="banos-${numeroPiso}">
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="2.5">2 1/2</option>
//             <option value="3">3</option>
//         </select>
//     `;

//     const selectSalaElement = `
//         <label for="sala-${numeroPiso}">Sala:</label> 
//         <select id="sala-${numeroPiso}">
//             <option value="si">Sí</option>
//             <option value="no">No</option>
//         </select>
//     `;

//     const selectComedorElement = `
//         <label for="comedor-${numeroPiso}">Comedor:</label> 
//         <select id="comedor-${numeroPiso}">
//             <option value="si">Sí</option>
//             <option value="no">No</option>
//         </select>
//     `;

//     const selectCocinaElement = `
//         <label for="cocina-${numeroPiso}">Cocina:</label> 
//         <select id="cocina-${numeroPiso}">
//             <option value="si">Sí</option>
//             <option value="no">No</option>
//         </select>
//     `;

//     const selectLavanderiaElement = `
//         <label for="lavanderia-${numeroPiso}">Lavanderia:</label> 
//         <select id="lavanderia-${numeroPiso}">
//             <option value="si">Sí</option>
//             <option value="no">No</option>
//         </select>
//     `;

//     contenedor.innerHTML = `
//         ${selectCuartosElement}
//         ${selectBanosElement}
//         ${selectSalaElement}
//         ${selectComedorElement}
//         ${selectCocinaElement}
//         ${selectLavanderiaElement}
//     `;

//     const formContainner = document.getElementById("formContainner");
//     if (!formContainner) return console.error("formContainner no existe");
//     formContainner.appendChild(contenedor);
// }

// function cambiandoNroPisos(e) {
//     const numeroPisos = Number.parseInt(e.target.value);
//     const formContainner = document.getElementById("formContainner");
//     if (!formContainner) return console.error("formContainner no existe");
//     formContainner.innerHTML = "";

//     const selectAnchoLargoElement = `
//         <label for="ancho">Ancho:</label>
//         <select id="ancho">
//             <option value="6">6 metros</option>
//             <option value="8">8 metros</option>
//         </select>
        
//         <label for="largo">Largo:</label>
//         <select id="largo">
//             <!-- Opciones iniciales para Ancho de 6 metros -->
//             <option value="17">17 metros</option>
//             <option value="18">18 metros</option>
//             <!-- Opciones iniciales para Ancho de 8 metros -->
//             <option value="15">15 metros</option>
//             <option value="16">16 metros</option>
//         </select>
//         <label for="escalera">Posicion de la Escalera:</label>
//         <select id="escalera">
//             <option value="1">Adelante</option>
//             <option value="2">Medio</option>
//             <option value="3">Fondo</option>
//         </select>
//     `;

//     formContainner.innerHTML = selectAnchoLargoElement;
//     for (let i = 0; i < numeroPisos; i++) {
//         generarFormulario(i);
//     }
// }

// function start() {
//     const selectPisos = document.getElementById("pisos");
//     if (!selectPisos) return console.error("el selectPisos no existe");
//     selectPisos.addEventListener("change", cambiandoNroPisos);
// }
// start();
