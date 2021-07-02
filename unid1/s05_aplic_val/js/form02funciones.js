function fnValidar02()
{
    let xnOMBRE = document.getElementById("txtNombres").value;
    if (xnOMBRE==""){
        alert("Falta Nombres...");
        return false;
    }

    let xApellido = document.getElementById("txtApellidos").value;
    if (xApellido==""){
        alert("Falta Apellidos...");
        return false;
    }

    let xDireccion = document.getElementById("txtDireccion").value;
    if (xDireccion==""){
        alert("Falta Dirección...");
        return false;
    }

    let xEdad=document.getElementById("txtEdad").value;
    if(xEdad == "" || /^\s+$/.test(xEdad) ){
        alert("ESCRIBA SU EDAD"); 
        return false;
    }

    let xFecha=document.getElementById("fecNac").value;
    if(xFecha == "" || /^\s+$/.test(xFecha) ){
        alert("ESCRIBA SU FECHA"); 
        return false;
    }

    let elementoGenero = document.getElementsByName("rdGenero");
    
    let valorElegidoGenero="";
    let eligioGenero=false;

    for(let i=0; i < elementoGenero.length; i++){
        if(elementoGenero[i].checked){
            valorElegidoGenero=elementoGenero[i].value;
            eligioGenero=true;
        }
    }
    if(!eligioGenero){
        alert("Elija un Genero...");
        return false;
    }else{
        alert("Su genero elegido es : " + valorElegidoGenero);
    }

    
    let elementoEstado = document.getElementById("lstEstado");
    let xEstado= elementoEstado.selectedIndex;
    
    if( xEstado == "" || xEstado == 0){
        alert("Falta seleccionar el Estado Civil...");
        return false;
    }else{
        alert("El estado Civil seleccionado es : "+elementoEstado.options[xEstado].text);
    }
 return true;
}