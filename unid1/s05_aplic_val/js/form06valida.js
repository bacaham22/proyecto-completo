function fnValidar06()
{
    var xTurno=document.getElementById("lstGenero").value;
    if(xTurno==""){
        alert("Seleecione GENERO...");
        return false;
    }
    var xResult=document.getElementById("txtResultG").value;
    if(xResult="" || xResult==0){
        alert("Revice... Resultado ¿0 o VACIO?)");
        return false;
    }
    /// Caso contrario ///
    return true;
}
function verConteo6(genero, mtzAlumnos)
{
    contadorGenero=0;
    if(mtzAlumnos.length>0){
        mtzAlumnos.forEach(element=>{
            if(element[4]==genero){
                contadorGenero++;
            }
        });
    }
    document.getElementById("txtResultG").value=contadorGenero
}