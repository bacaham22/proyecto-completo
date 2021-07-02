function fnValidar02()
{
	let xTexto=document.getElementById("txtTexto").value;
    if(xTexto == "" || /^\s+$/.test(xTexto) ){
        alert("Escriba ")
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
    }
    
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
    }else if(cont!=2){
        if(cont==1){
            cont='una'
            alert('Elija solo dos preferencias, no!! '+cont+' preferencia.');
            return false;}
        else if(cont==3){
            cont='tres'
            alert('Elija solo dos preferencias, no!! '+cont+' preferencias.');
            return false;}
        else if(cont==4){
            cont='cuatro'
            alert('Elija solo dos preferencias, no!! '+cont+' preferencias.');
            return false;}
    }
    else {
        alert("Su genero elegido es : " + valorElegidoGenero);
        
        if(valorElegidoPreferencia=='M' || valorElegidoPreferencia=='C' ) { 
        alert("Su preferencia elegida es " + elementoPref[0].value+'y '+ valorElegidoPreferencia );}
        else if(valorElegidoPreferencia=='C' || valorElegidoPreferencia=='T'){
            alert("Su preferencia elegida es " + elementoPref[1].value+"y "+ valorElegidoPreferencia );}
        else if(valorElegidoPreferencia=='T' || valorElegidoPreferencia=='N'){
            alert("Su preferencia elegida es s  " + elementoPref[2].value+"y "+ valorElegidoPreferencia );   
        }
        }  /*BUENA*/
return true;
}