<?php

$connection = new PDO('mysql:host=localhost;dbname=online_shop','root','');
$connection->query('set names utf8');
$connection->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

$sql = "select * from san_pham where ma_loai = 198 limit 0,8";
$st_data = $connection->prepare($sql);
$st_data->execute();
$data = $st_data->fetchAll(PDO::FETCH_OBJ);

//convert data to json
header('Content-type: application/json');
$json_data = json_encode($data);

//print data
echo $json_data;
?>