//document= elemento getElementByid=metodo ()=Nome
document.getElementById("loginForm").addEventListener("submit", 
    function(event){
    event.preventDefault(); //Impede o envio do formulario



const username = document.getElementById("username").value;
const password = document.getElementById("password").value; 


//validação dos campos

if(!username || !password){
    alert("Porfavor preencha todos os campos");
    return;
}

if(password.length<8){
    alert("A senha deve ter pelo menos 8 caracteres.");
    return;
}

    //salvar o nome do user no localStorage :)
    localStorage.setItem("username", username);

    window.location.href = "home.html";
    alert("Login bem sucedido!");
});   

