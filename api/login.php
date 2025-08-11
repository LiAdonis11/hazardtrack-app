<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-Width");

include 'db.php';

$data = json_decode(file_get_contents("php://input"));

if(!isset($data->email) || !isset($data->password)){
    echo json_encode(["success" => false, "message" => "Email and password are required"]);
    exit;
}

$email = $conn->real_escape_string($data->email);
$password = $data->password;

$query = "SELECT * FROM users WHERE email='$email'";

$result = $conn->query($query);

if($result->num_rows == 1) {
    $users = $result->fetch_assoc();

    if (password_verify($password, $user['password'])) {
        echo json_encode([
            "success" => true,
            "message" => "Login Successful",
            "user" => [
                "id" => $user['id'],
                "name" => $user['name'],
                "email" => $user['email']
            ]
            ]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid password"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "User not found"]);

}

?>