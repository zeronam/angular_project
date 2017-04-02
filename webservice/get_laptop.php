<?php

$connection = new PDO('mysql:host=localhost;dbname=online_shop','root','');
$connection->query('set names utf8');
$connection->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

$sql = "SELECT * FROM `san_pham` where ma_loai = 32 or ma_loai = 33 or ma_loai = 34 or ma_loai = 35 or ma_loai = 36 order by ma DESC limit 0,50";
$st_data = $connection->prepare($sql);
$st_data->execute();
$data = $st_data->fetchAll(PDO::FETCH_OBJ);

//convert data to json
header('Content-type: application/json');
$json_data = json_encode($data);

//print data
echo $json_data;
?>