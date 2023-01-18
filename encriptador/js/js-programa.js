
var valor; 
//varibale que uso para trabajar su valor para encriptar.
var error = 0; 
//variable que uso para saber si hay un error de validación. 
//si el valor es '0' sigue la ejecución; si es '1', cancelo la función (encriptar/desencriptar) salgo con un return.


/*---- FUNCIÓN PARA VALIDAR TEXTOS --------------- */

function validarTexto(valor){
	//función que valida el texto: minúsculas(ya lo resuelvo en pantalla).
	// no se permite el ingreso del campo vacío, no se permiten caracteres especiales ni acentos.

	if(valor == null || valor.length == 0 || /^\s*$/.test(valor)){ //valida campo vacío
        alert("Debes ingresar algún texto para encriptar o descriptar!"); //si encuentra coincidencia... 
		error = 1; 
		return;
	}

	const caracteres = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; //creo una cadena con caracteres especiales.

	if (caracteres.test(valor)) { // comparo o testeo la cadena de texto inicial, contra la creada con caracteres.
	    alert('No puedes ingresar caracteres especiales'); //entonces si es true: es porque halló algo.
	    error = 1;
	    return;
	} 

	const numeros = /[0-9]/; //creo una nueva cadena con números.
	
	if (numeros.test(valor)) { //comparo o testo la cadena del texto incial, contra la creada con números.
	    alert('No puedes ingresar números'); // entnces si es tru: es porque halló algo.
	    error = 1; 
	    return;
	 } 

	const acentos = /[á,é,í,ó,ú]/; // hago lo mismo ahora con vocales con acentos
	
	if(acentos.test(valor)){
		alert('No puedes ingresar acentos!');
	    error = 1; 
	    return;
	}
}

/*---- FUNCIÓN PARA TRABAJAR LA PANTALLA ------------ */

function trabajarPantalla(nuevaStr5){

	//voy a ocultar los dos mensajes para mostrar el resultado del texto encriptado/desencritado en pantalla. 
	document.querySelector('.copiar').style.display = 'flex';
	document.querySelector('#texto1').style.display = 'none'; //oculto el primer texto debajo del muñeco.
	document.querySelector('#texto2').style.display = 'none'; //oculto el segundo texto debajo del muñeco.
	document.querySelector('#resultado-encriptado').style.display = 'block'; // hago visible el textarea oculto por default.
	document.querySelector('#resultado-encriptado').value = nuevaStr5; //y muestro allí el texto encriptado/desencriptado.

}


/*---- FUNCIÓN PARA ENCRIPTAR TEXTOS ------------ */

function encriptarTexto() {
	
	const textoInicial = document.querySelector(".textoencriptar").value; 
	//esto es una constante que captura el contenido del textarea

	valor = textoInicial; 
	//paso el valor de textoInicial a valor, para trabajar con una variable

	validarTexto(valor);//llamo a la función validarTexto.

	if(!validarTexto){ //si no se ejecutó esta función o si algo salió mal 
		alert("Error no se puedo validar el texto ingresado!");//aviso en pantalla el error.
		window.location.reload();//y hago un refresh, recargando la página en limpio.
	}
	
	if(error == 1){
		error = 0;
		return; //salgo de función 
	}

	/*------SECCION LLAVES DE ENCRIPTACION---------*/

	const nuevaStr = valor.replaceAll("e", "enter");
	const nuevaStr2 = nuevaStr.replaceAll("i", "imes");
	const nuevaStr3 = nuevaStr2.replaceAll("a", "ai");
	const nuevaStr4 = nuevaStr3.replaceAll("o", "ober");
	const nuevaStr5 = nuevaStr4.replaceAll("u", "ufat");

	trabajarPantalla(nuevaStr5); // preparo la pantalla para mostrar el texto (nueva cadena).

}


/*---- FUNCIÓN PARA DESENCRIPTAR TEXTOS ------------ */

function desencriptarTexto() {

	//esta función, auún en desarrollo; va a descriptar nuevamente el texto inicial y voy a ver si, 
	//llego a armarla para que acepte un nuevo texto y lo desencripte 
	//imaginando que esto sea una App para eso encriptar y enviar un mensaje
	// y recibir respuesta, desde otro mensajero, y desencriptarla.

	const textoInicial = document.querySelector(".textoencriptar").value; 
	//esto es una constante que captura el contenido del textarea

	valor = textoInicial; 
	//paso el valor de textoInicial a valor, para trabajar con una variable

	validarTexto(valor);//llamo a la función validarTexto.

	if(!validarTexto){ //si no se ejecutó esta función o si algo salió mal 
		alert("Error no se puedo validar el texto ingresado!");//aviso en pantalla el error.
		window.location.reload();//y hago un refresh, recargando la página en limpio.
	}
	
	if(error == 1){
		error = 0;
		return; //salgo de función 
	}

	/*------SECCION DE LLAVES DE DESENCRIPTACION---------*/

	const nuevaStr = valor.replaceAll("enter", "e");
	const nuevaStr2 = nuevaStr.replaceAll("imes", "i");
	const nuevaStr3 = nuevaStr2.replaceAll("ai", "a");
	const nuevaStr4 = nuevaStr3.replaceAll("ober", "o");
	const nuevaStr5 = nuevaStr4.replaceAll("ufat", "u");

	trabajarPantalla(nuevaStr5);
}


/*---- FUNCIÓN PARA COPIAR TEXTOS ------------ */

function copiarTexto() {
	//función para copiar al portapapeles el texto: encriptado/desencriptado.

	var textocopiado = document.querySelector("#resultado-encriptado").value 
	//paso el contenido del textarea a la variable textocopiado para trabajar con ese valor.
	
	document.querySelector("#resultado-encriptado").select(); 
	// lo uso para seleccionar el contenido del textarea 

	navigator.clipboard.writeText(textocopiado) 
	//esta expresión copia el contenido del textarea al portapapeles
		.then(() => { 
		//aquí voy a tener dos opciones: si se copia, aviso con un alert
			alert('Texto copiado al portapales');      
		}) 
		.catch(err => { 
		//Si no se copia, por algún error, aviso con un alert y muestro el error. (por eso uso el catch me parecio copado!)
		    alert('Error en copiar el texto: ', err);     
		});
}