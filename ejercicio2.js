function isValidCard(credit) {
 
  var ingresoUsuario = prompt("Ingrese número de tarjeta de crédito por favor.");
  var letras = /[a-zA-Z]/; //variable para descartar letras en mi ingreso de datos.
  var nuevoNum = []; // variable vacía para ingresar el número invertido.
	for (i = 0; i < ingresoUsuario.length; i++){
	 //For que recorrerá los caracteres de mis datos ingresados.
	}
	
		if (!letras.test("") || ingresoUsuario == "undefined"){
		  return alert("Ingrese un número válido")
		} //este if nos permite rechazar las letras y los espacios vacíos.
}
 
isValidCard()