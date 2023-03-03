<?php
$host = 'localhost';
$db = 'products';
$user = 'root';
$password = 'root';

$dsn = "mysql:host=$host;dbname=$db;port=8889;charset=UTF8";

function connect(){
    global $dsn, $host, $db, $user, $password;
try{
    return new PDO($dsn, $user, $password);

    if($pdo){
        echo "Connected to the $db database successfully";
    }


}catch(PDOException $e) {
    echo $e->getMessage();
}
}