function login(){
    let usuario = document.getElementById("user").value;
    let contraseña = document.getElementById("pass").value;
    if (usuario.trim()==="" || contraseña.trim()===""){
        alert("Por favor ingrese un usuario o contraseña correcta");   
    }
    else{
        window.location="index.html";
    }
};
    document.addEventListener("DOMContentLoaded", function(e){
});