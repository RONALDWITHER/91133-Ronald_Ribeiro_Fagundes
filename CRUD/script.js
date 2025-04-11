function validar(){
    const nome= document.getElementById("nome").value.trim();
    const tel= document.getElementById("tel").value.trim();
    const email= document.getElementById("email").value.trim();
    const msgErro = document.getElementById("msgErro");

    if(!nome || !tel || !email){
        msgErro.textContent = "Por favor, preencha todos os campos";
        return false;
    }
    return true;
}
