<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require("config.php");
require_once("dataClasses/class.php");

    
       $init = new MySqlProducts();
       $initialData = $init->getDataFromRequest();
       $prodType = $initialData->option;
       $products = new $prodType(connect());
       $products->setData();
       $products->save();


    