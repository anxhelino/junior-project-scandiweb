<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require('config.php');
require_once 'dataClasses/MySqlProducts.class.php';

$products = new MySqlProducts(connect());

$products->loadAll();



