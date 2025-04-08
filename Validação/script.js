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

    window.location.href = "painel.html";
    alert("Login bem sucedido!");
});   

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    const username = Document.getElementById("username").value;
    const password = Document.getElementById("password").value;

    if (!username || !password){
        alert("Por favor,preencha todos os campos");
        return;
    }

    if (password.length < 8){
        alert("a senha deve conter 8 dígitos");
        return;
    }

    localStorage.setItem("username",username);
    window.location.href = "painel.html";
    alert("Login efetuado com sucesso!");
});