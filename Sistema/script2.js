//document= elemento getElementByid=metodo ()=Nome
document.getElementById("loginForm").addEventListener("submit", 
    function(event){
    event.preventDefault(); //Impede o envio do formulario



const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const msgErro = document.getElementById("msgErro");


//validação dos campos

if(!username || !password){
    msgErro.textContent = "Por favor, preencha todos os campos";
    return;
}

if(password.length<8){
    msgErro.textContent= "A senha deve ter pelo menos 8 caracteres.";
    return;

}  msgErro.textContent= "";
    //salvar o nome do user no localStorage :)
    localStorage.setItem("username", username);
    window.location.href = "home.html";
    alert("Login bem sucedido!");

});




