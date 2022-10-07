// =========================================================== CIFRAR =================================================
// ALGORITMO PARA CIFRAR DESDE ARCHIVO
const Cifrar = () => {
    
    var mensaje = document.getElementById('lectorArchivoCifrar').innerHTML;
    var llave = document.getElementById('clave').value;

    console.log(mensaje)

    if(llave == ''){

        alert('INGRESA UNA CLAVE ANTES DE ENCRIPTAR O DECENCRIPTAR');
        
    }
    else{

        var encriptado = CryptoJS.DES.encrypt(mensaje, CryptoJS.enc.Utf8.parse (llave) , {
                
            mode : CryptoJS.mode.ECB , padding : CryptoJS.pad.Pkcs7
        
        }).toString();
        
        document.getElementById('lectorArchivoCifrar').innerHTML = 
        '<label>EL MENSAJE ENCRIPTADO ES EL SIGUIENTE : </label>'+
        '<h1 id = "mensajeEncriptado">' + encriptado + '</h1>';

    }

}

// LEER EL ARCHIVO A CIFRAR
async function cargarArchivoCifrar(file){

    var texto = await file.text();
    document.getElementById('lectorArchivoCifrar').textContent = texto;

}

// VALIDAR EL TIPO DE ARHCIVO A CIFRAR
const ValidarCifrar = () =>{

    var archivoElegido = document.getElementById('fileCifrar');
    var contenidoArchivoElegido = archivoElegido.value;
    var extencion = /(.txt)$/i; // SOLO TXT

    if(!extencion.exec(contenidoArchivoElegido)){

        alert('SOLAMENTE INGRESA ARCHIVOS DE TIPO TXT');
        archivoElegido.value = '';
        return false;

    }
    else{

        if(archivoElegido.files && archivoElegido.files[0]){

            var lector = new FileReader();
            lector.onload = function(event){

                cargarArchivoCifrar(archivoElegido.files[0]); // REALIZAR INSERCCION HTML ENCRIPTADA

            }
        

            lector.readAsDataURL(archivoElegido.files[0]);

        }

    }

}

// =========================================================== DECIFRAR =================================================
// ALGORITMO PARA DECIFRAR DESDE ARCHIVO
const Decifrar = () => {

    var mensajeEncriptado = document.getElementById('lectorArchivoDecifrar').innerHTML;
    var llave = document.getElementById('clave').value;

    if(llave == ''){

        alert('INGRESA UNA CLAVE ANTES DE ENCRIPTAR O DECENCRIPTAR');

    }
    else{

        var desencriptado = CryptoJS.DES.decrypt(mensajeEncriptado, CryptoJS.enc.Utf8.parse(llave), {
            
            mode : CryptoJS.mode.ECB , padding: CryptoJS.pad.Pkcs7
        
        }).toString(CryptoJS.enc.Utf8);

        document.getElementById('lectorArchivoDecifrar').innerHTML = 
        '<label>EL MENSAJE DECENCRIPTADO ES EL SIGUIENTE : </label>'+
        '<h1 id = "mensajeEncriptado">' + desencriptado + '</h1>';

    }

}

// LEER EL ARCHIVO A CIFRAR
async function cargarArchivoDecifrar(file){

    var texto = await file.text();
    document.getElementById('lectorArchivoDecifrar').textContent = texto;

}

// VALIDAR EL TIPO DE ARHCIVO A CIFRAR
const ValidarDecifrar = () =>{

    var archivoElegido = document.getElementById('fileDecifrar');
    var contenidoArchivoElegido = archivoElegido.value;
    var extencion = /(.txt)$/i;

    if(!extencion.exec(contenidoArchivoElegido)){

        alert('SOLAMENTE INGRESA ARCHIVOS DE TIPO TXT');
        archivoElegido.value = '';
        return false;

    }
    else{

        if(archivoElegido.files && archivoElegido.files[0]){

            var lector = new FileReader();
            lector.onload = function(event){

                cargarArchivoDecifrar(archivoElegido.files[0]); // REALIZAR INSERCCION HTML DECENCRIPTADA

            }
        

            lector.readAsDataURL(archivoElegido.files[0]);

        }

    }

}