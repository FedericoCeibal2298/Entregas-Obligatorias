function login(){
    let usuario = document.getElementById("user").value;
    let contraseña = document.getElementById("pass").value;
    let localusuario;

    if (usuario.trim()==="" || contraseña.trim()===""){
        alert("Por favor ingrese un usuario o contraseña correcta");   
    }
    else{
        window.location="index.html";
        localStorage.setItem("usuario",usuario)
    }
};
    document.addEventListener("DOMContentLoaded", function(e){
})
function logout(){
    localStorage.clear();
    window.location="login.html";
    }