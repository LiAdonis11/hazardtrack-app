<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include 'db.php';

$id = $_GET['id'] ?? null;

if(!$id) {
    echo json_encode(["success" => false, "message" => "User ID is required."]);
    exit;
}

$id = intval($id);
$sql = "SELECT id, name, email FROM users WHERE id = $id";
$result = $conn->query($sql);

if($result->num_rows > 0){
    $user = $result->fetch_assoc();
    echo json_encode(["success" => true, "user" => $user]);
} else {
    echo json_encode(["success" => false, "message" => "User not found."]);
}
?>