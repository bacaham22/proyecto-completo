function fnValidar04(){
    /*var fileInput = document.getElementById('fileJPGpng');
    var filePath = fileInput.value;
    var allowedExtensions = /(.jpg|.png)$/i;
    if(!allowedExtensions.exec(filePath)){
        fileInput.value = '';
        return false;
    }
    var fileInput = document.getElementById('fileImagen');
    var filePath = fileInput.value;
    var allowedExtensions = /(.png)$/i;
    if(!allowedExtensions.exec(filePath)){
        
        fileInput.value = '';
        return false;
    }
    var fileInput = document.getElementById('filePDF');
    var filePath = fileInput.value;
    var allowedExtensions = /(.pdf)$/i;
    if(!allowedExtensions.exec(filePath)){
        fileInput.value = '';
        return false;
    }
return true;*/
     // Obtener nombre de archivo

     let archivo = document.getElementById('fileJPGpng').value;
     // Obtener extensión del archivo
      extension = archivo.substring(archivo.lastIndexOf('.'),archivo.length);
     // Si la extensión obtenida no está incluida en la lista de valores
     // del atributo "accept", mostrar un error.
    if(archivo==""){
        
    }else if(document.getElementById('fileJPGpng').getAttribute('accept').split(',').indexOf(extension) < 0){
        alert('Archivo inválido. No se permite la extensión ' + extension); 
        return false;
      }
    let archivo2 = document.getElementById('fileImagen').value;
      // Obtener extensión del archivo
    extension2 = archivo2.substring(archivo2.lastIndexOf('.'),archivo2.length);
      // Si la extensión obtenida no está incluida en la lista de valores
      // del atributo "accept", mostrar un error.
    if(archivo2==""){   
    }
    let archivo3 = document.getElementById('filePDF').value;
       // Obtener extensión del archivo
    extension3 = archivo3.substring(archivo3.lastIndexOf('.'),archivo3.length);
       // Si la extensión obtenida no está incluida en la lista de valores
       // del atributo "accept", mostrar un error.
    if(archivo3==""){
         
    }else if(document.getElementById('filePDF').getAttribute('accept').split(',').indexOf(extension3) < 0){
          alert('Archivo inválido. No se permite la extensión ' + extension3); 
          return false;
    }
       
    let email=document.getElementById('txtCorreo').value;
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!expr.test(email) || archivo=="" || archivo2=="" || archivo3==""){
            alert("Complete todos los campos o seleccione");
            return false;
            
    }
  return true;
}
