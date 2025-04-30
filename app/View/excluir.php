<?php
include 'conecta.php';

if(!isset($_GET['id'])) {
    header("Location: listar.php");
    exit;
}

$id =intval($_GET['id']);
$id = $_GET['id'];

$sql = "DELETE FROM produtos WHERE id = ?";
$stmt = $conn->prepare($sql);

if($stmt === false) {
    die("Erro na preparação da query: " . $conn->error);
}

$stmt->bind_param("i", $id);
$stmt->execute();

if($stmt->affected_rows > 0) {
    header("Location: listar.php?sucesso=Produto excluído com sucesso");
} else {
    header("Location: listar.php?erro=Produto não encontrado ou já excluído");
}

$stmt->close();
$conn->close();