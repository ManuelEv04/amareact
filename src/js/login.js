function validar_sesion(){  


    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;
  

    
   if (usuario == "") {
        alert("Campo usuario no debe estar vacío.")
        return false;
    }else if ( contraseña == "" ){
        alert("El campo de la clave no debe estar vacío.")
        return false;
    }


    if (usuario == "manuel" && contraseña == "adso" ) {       
        window.open('pago.html', '_blank');
        return false;
     }else {
        alert("Usuario Incorrecto")
        return false;
    }
    


  
}