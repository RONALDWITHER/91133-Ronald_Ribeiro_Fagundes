function validarLogin(){
    let u = document.forms[0].usuario.value;
    let s = document.forms[0].senha.value;
    const msgErro = document.getElementById("msgErro");

    if(u.trim()=== "" || s.trim() ===""){
        msgErro.textContent = "Por favor, preencha todos os campos";
        return false;
    }
    return true;
}