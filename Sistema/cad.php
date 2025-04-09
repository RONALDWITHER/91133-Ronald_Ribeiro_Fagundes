<?php

$host = "localhost";
$user = "root";
$pass = "";
$dbname = "cadastro_produtos";

$conn = new mysqli($host, $user, $pass, $dbname);

if($conn->connect_error){
    die("Conexão falhou:" . $conn->connect_error);
}


echo("Conectado!");

$produto = trim($_POST['product'] ?? '');
$preco = floatval($_POST['preco'] ?? '');
$quantidade = trim($_POST['quantidade'] ?? '');

if($produto === "" || $preco <=0 || $quantidade<=0){
    echo "Dados inválidos!";
    exit;
}

$stmt = $conn->prepare("INSERT INTO produtos (produto, preco, quantidade) VALUES (?, ?, ?)");
$stmt->bind_param("sdd",$produto, $preco,$quantidade);

if($stmt->execute()){
    echo "Cadstro realizado com Sucesso!";
} else{
    echo "Erro ao cadastrar:" . $stmt->error;
}

$stmt->close();
$conn->close();
?>
 
