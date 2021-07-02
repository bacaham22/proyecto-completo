const fnValidar01 = () => {
	//PASOS PARA VALIDAR
    //1) Formulario (action, method, evento) con "elementos HTML" que tengan "name" y "id" 
    //2) Evento (onsubmit) trabajo con el boton tipo "submit" para desencadenar  una función (true, false)
    //3) Prueba logica en función (True o false)

    let xTexto=document.getElementById("txtTexto").value;
    if(xTexto == "" || /^\s+$/.test(xTexto) ){
        alert("ESCRIBA TEXTO...");
        return false;
    }
    let xNumero=document.getElementById("txtNumero").value;
    if(xNumero == "" || /^\s+$/.test(xNumero) ){
        alert("ESCRIBA NUMBERS..."); 
        return false;
    }

    ///Caso contrario///
    return true;
}