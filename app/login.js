function validarLogin(){
    let usuario = document.getElementById("usuario").value.trim();
    let senha = document.getElementById("senha").value.trim();
    const msgErro = document.getElementById("msgErro");

    if(usuario === "" || senha===""){
        msgErro.textContent = "Por favor, preencha todos os campos";
        return false;
    }

    return true;
}