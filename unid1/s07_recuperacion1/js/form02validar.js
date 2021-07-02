function fnValidar02()
{
	let xNumero=document.getElementById("txtnumber").value;
    if(xNumero == "" ||  /^\s+$/.test(xNumero)){
        alert("Seleccione un número"); 
        return false;
    }
	let xTexto=document.getElementById("lstGenero").value;
    if(xTexto == "" || /^\s+$/.test(xTexto) ){
        alert("Seleccione su Genero");
        return false;
    }
	/// Caso contrario ///
	let cont=0;
    let valorElegidoPreferencia = "";
    let elementoPref = document.getElementsByName("chkPrefer[]");
    var eligioPreferencia = false;
    for(let i=0; i<(elementoPref.length); i++){
        if(elementoPref[i].checked){        
            valorElegidoPreferencia= elementoPref[i].value;
            eligioPreferencia= true;
            cont = cont + 1;      
        }
    }
    if(cont==0){
        alert("Elija sus preferencias");
        return false;
    }else if(cont!=3){
        if(cont==1){
            cont='una'
            alert('Elija solo tres preferencias, no!! '+cont+' preferencia.');
            return false;}
        else if(cont==2){
            cont='dos'
            alert('Elija solo tres preferencias, no!! '+cont+' preferencias.');
            return false;}
        else if(cont==4){
            cont='cuatro'
            alert('Elija solo tres preferencias, no!! '+cont+' preferencias.');
            return false;}
    }
    else {
        alert("Su genero elegido es : " + xTexto);
        
        if(valorElegidoPreferencia=='M' || valorElegidoPreferencia=='C' || valorElegidoPreferencia=='T') { 
        alert("Su preferencia elegida es " + elementoPref[0].value+', '+elementoPref[1].value+'y ' + valorElegidoPreferencia );}
        else if(valorElegidoPreferencia=='C' || valorElegidoPreferencia=='T'|| valorElegidoPreferencia=='N'){
            alert("Su preferencia elegida es " + elementoPref[1].value+", "+elementoPref[2].value+'y ' + valorElegidoPreferencia );}
        else if(valorElegidoPreferencia=='T' || valorElegidoPreferencia=='N' || valorElegidoPreferencia=='O'){
            alert("Su preferencia elegida es s  " + elementoPref[2].value+", "+elementoPref[3].value+'y ' + valorElegidoPreferencia );   
        }
        }  /*BUENA*/
	return true;
}