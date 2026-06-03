const inputEl = document.getElementById("inputTexto");
const inputPalabra  = document.getElementById("inputPalabra");
const btnEl = document.getElementById("btnCalcular");
const resultEl = document.getElementById("resultadoTexto");

const contarPalabrasRepetidas = (textoLargo, palabraBuscar) => {
    const textoLimpio = textoLargo.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?¿¡!]/g, "");
    const palabraBuscarLimpia = palabraBuscar.toLowerCase();
    const listaPalabras = textoLimpio.split(" ");    
    const coincidencias = listaPalabras.filter(palabra => palabra === palabraBuscarLimpia);    
    return coincidencias.length;
};

btnEl.addEventListener("click", () => {
    const texto = inputEl.value.trim();
    const palabraQueBuscamos = inputPalabra.value.trim();

    if (texto === "" || palabraQueBuscamos === "") {
        resultEl.textContent = "Error: ¡Los campos no pueden estar vacío!";        
        resultEl.style.color = "red";
        return; 
    }

    const resultado = contarPalabrasRepetidas(texto, palabraQueBuscamos);
    
    resultEl.textContent = `El número de veces que se repite una palabra es: ${resultado}`;
    resultEl.style.color = "white";

    inputEl.value = "";
    inputPalabra.value = "";
    inputEl.focus();
});
