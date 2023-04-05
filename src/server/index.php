<?php
header('Access-Control-Allow-Origin: *');

$user = 'root';
$host = 'localhost';
$password= '';
$db="noPolis";

$conn = mysqli_connect($host, $user, $password, $db);

// check connection
if ($conn->connect_error){
    die("Connection Failed: ". $conn->connect_error);
};

//query 
$query = "SELECT * FROM test;";
$result = $conn->query($query);

$data = [];
if($result->num_rows>0){
    while($row = $result->fetch_assoc()){
        $data[]=$row;
    };
}

//close conn
$conn->close();

header('Content-Type: application/json');
echo json_encode($data);
?>
