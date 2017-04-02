<?php

$connection = new PDO('mysql:host=localhost;dbname=online_shop','root','');
$connection->query('set names utf8');
$connection->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

// $ma_sp = mysql_real_escape_int($_GET['ma']);

/*$sqlMa = "SELECT ma FROM `san_pham` where 1";
$st_data_Ma = $connection->prepare($sqlMa);
$st_data->execute();
$data = $st_data->fetchAll(PDO::FETCH_OBJ);*/
$id = $_GET["id"];
$sql = "SELECT * FROM `san_pham` where ma = $id";
$st_data = $connection->prepare($sql);
$st_data->execute();
$data = $st_data->fetchAll(PDO::FETCH_OBJ);

//convert data to json
header('Content-type: application/json');
$json_data = json_encode($data);

//print data
echo $json_data;
?>