const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.querySelector(".copiar");

/*Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

const restringe = /^[a-z\s]+$/;  //Para restringir minusculas sin acentos

function encryptBtn(){
    if (validarEntrada(textArea.value)) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        botonCopiar.style.display = "initial";
    }
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e" ,"enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //console.log(matrizCodigo);
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;

}

function decryptBtn(){
    if (validarEntrada(textArea.value)) {
        const textoEncriptado = desEncriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        botonCopiar.style.display = "initial";

    }
}

function desEncriptar(stringDesEncriptado){
    let matrizCodigo = [["e" ,"enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //console.log(matrizCodigo);
    stringDesEncriptado = stringDesEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesEncriptado.includes(matrizCodigo[i][1])){
            stringDesEncriptado = stringDesEncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesEncriptado;

}

function copiarTexto(){
    if (mensaje.value.trim() !== "") {
        navigator.clipboard.writeText(mensaje.value).then(function () {
            alert("Texto copiado correctamente");
        }, function (err) {
            console.error("Error al copiar el texto: ", err);
        });
        mensaje.value = "";
        mensaje.style.backgroundImage = "url('/assets/Muñeco.png')"; // Restaura la imagen de fondo
        botonCopiar.style.display = "none"; // Oculta el botón copiar nuevamente
    } else {
        alert("No hay texto para copiar");
    }
}

function validarEntrada(texto) {
    if (texto.trim() === "") {
        alert("Se debe ingresar un texto a Encriptar o a Desencriptar.");
        return false;
    }

    if (!restringe.test(texto)) {
        alert("El texto contiene caracteres inválidos. Solo se permiten letras minúsculas y sin acentos.");
        return false;
    }

    return true;
}