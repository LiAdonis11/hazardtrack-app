<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include 'db.php';

$data = json_decode(file_get_contents("php://input"));

if (
    !isset($data->user_id) ||
    !isset($data->description) ||
    !isset($data->category) ||
    !isset($data->latitude) ||
    !isset($data->longitude) ||
    !isset($data->photo)
) {
    echo json_encode(["success" => false, "message" => "Missing required fields"]);
    exit;
}

$user_id = intval($data->user_id);
$description = $conn->real_escape_string($data->description);
$category = $conn->real_escape_string($data->category);
$latitude = floatval($data->latitude);
$longitude = floatval($data->longitude);
$photoData = $data->photo;

$photoName = uniqid() . ".jpg";
$photoPath = "uploads/" . $photoName;

if (!file_exists('uploads')) {
    mkdir('uploads', 0777, true);
}

if (!file_put_contents($photoPath, base64_decode($photoData))) {
    echo json_encode(["success" => false, "message" => "Failed to save photo."]);
    exit;
}

$sql = "INSERT INTO hazards (user_id, description, category, latitude, longitude, photo, status, reported_at)
        VALUES ($user_id, '$description', '$category', $latitude, $longitude, '$photoName', 'pending', NOW())";

if ($conn->query($sql)) {
    echo json_encode(["success" => true, "message" => "Hazard reported successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
}
?>
