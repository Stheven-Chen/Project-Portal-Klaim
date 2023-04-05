<?php
header('Content-Type: application/json');

// Set headers to allow cross-origin requests
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary, Content-Length');

$data = json_decode(file_get_contents('php://input'), true);

$user = 'root';
$host = 'localhost';
$password= '';
$db="noPolis";

$conn = mysqli_connect($host, $user, $password, $db);

//connection check 
if($conn->connect_error){
    die("Connection Failed: ". $conn->connect_error);
}

//data 
$noPolis = $data['noPolis'];
$insured = $data['insured'];

//query 
$query = "INSERT INTO test (noPolis, insured) VALUES (?, ?)";
$stmt = $conn->prepare($query);
$stmt->bind_param("ss", $noPolis, $insured);
$stmt->execute();

if($conn->errno){
    echo json_encode(array('message' => 'Error: '.$conn->error));
    exit();
}

$conn->close();

echo json_encode(array('message' => 'Data inserted successfully.'));
?>
