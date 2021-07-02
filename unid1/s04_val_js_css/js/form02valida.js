const fnValidar02 = () => {

    
    
    
    
    let xTexto=document.getElementById("lstPreferencias").value;
    if(xTexto == "" || /^\s+$/.test(xTexto) ){
        alert("Seleccione su Prefenencia");
        return false;
    }
    let xNumero=document.getElementById("lstMes").value;
    if(xNumero == "" || /^\s+$/.test(xNumero) ){
        alert("Seleccione su Mes"); 
        return false;
    }
    /*let elementoEstado2 = document.getElementById("lstPreferencias");
    let xEstado2= elementoEstado2.selectedIndex;
    
    if( xEstado2 == "" || xEstado2 == 0){
        alert("Falta seleccionar el Estado Civil...");
        return false;
    }else{
        alert("El estado Civil seleccionado es : "+elementoEstado2.options[xEstado2].text);
    }
	let elementoEstado = document.getElementById("lstMes");
    let xEstado= elementoEstado.selectedIndex;
    
    if( xEstado == "" || xEstado == 0){
        alert("Falta seleccionar el Estado Civil...");
        return false;
    }else{
        alert("El estado Civil seleccionado es : "+elementoEstado.options[xEstado].text);
    }*/
return true;
}
/*   */