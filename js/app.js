
let imagenBusqueda = document.getElementById('img_src');
let textError = document.getElementById('txt_error');
let resultado = document.getElementById('texto');
let copiar = document.getElementById('copiar');

const textoOriginal = resultado.innerText;
    
    function ocultarImagen() {
        imagenBusqueda.style.display = 'none';
        textError.style.display = 'none';
        resultado.style.color = 'var(--color-primario)';
        copiar.style.display = 'flex';
    }

    function mostrarImagen () {
        imagenBusqueda.style.display = 'flex';
        textError.style.display = 'flex';
        copiar.style.display = 'none';
        resultado.style.marginBottom = '0';
        resultado.innerText = textoOriginal;
        resultado.style.color = '';
    }
    

    function encriptar() {
        let textoPorCambiar = document.getElementById('text').value.toLowerCase();
        
        //condicionamos que exista texto

        if (textoPorCambiar) { 
        // Reemplazar cada letra con su secuencia encriptada
        let textoEncriptado = textoPorCambiar.replace(/a/g, "ai")
                                             .replace(/e/g, "enter")
                                             .replace(/i/g, "imes")
                                             .replace(/o/g, "ober")
                                             .replace(/u/g, "ufat");

        document.getElementById('texto').innerText = textoEncriptado;
        ocultarImagen();
        document.getElementById('text').value = "";
        } else {
        mostrarImagen ();
        }
    }

    function desencriptar() {
        let textoPorCambiar = document.getElementById('text').value.toLowerCase();
        
         //condicionamos que exista texto

         if (textoPorCambiar) {
        // Reemplazar cada secuencia encriptada con su letra original en orden de longitud descendente
        let textoDesencriptado = textoPorCambiar.replace(/enter/g, "e")
                                                .replace(/imes/g, "i")
                                                .replace(/ober/g, "o")
                                                .replace(/ufat/g, "u")
                                                .replace(/ai/g, "a");

        document.getElementById('texto').innerText = textoDesencriptado;
        ocultarImagen();
        document.getElementById('text').value = "";
        } else {
            mostrarImagen ();
            }
        }

        
    function copiarTexto() {
        let textoACopiar = document.getElementById('texto').innerText;

        navigator.clipboard.writeText(textoACopiar).then(function() {
            alert('Texto copiado al portapapeles');
        });
    }