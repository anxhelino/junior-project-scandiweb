<?php 

abstract class Product {
    protected $db;
    protected $id;
    protected $sku;
    protected $productType;
    protected $price;
    protected $name;
    protected $specs;
    protected $data;

    public function __construct($db =''){
        $this->db = $db;
    }

    public function getId(){
        return $this->id;
    }

    public function getSku(){
        return $this->sku;
    }
    public function setSku($sku){
         $this->sku = $sku;
    }
    public function getSpecs(){
        return $this->sku;
    }
    public function setSpecs($specs){
         $this->specs = $specs;
    }
    public function getProductType(){
        return $this->productType;
    }
    public function setProductType($productType){
         $this->productType = $productType;
    }
    public function getPrice(){
        return $this->price;
    }
    public function setPrice($price){
        $this->price = $price;
    }
    public function getName(){
        return $this->name;
    }
    public function setName($name){
        $this->name = $name;
    }

    public function getDataFromRequest() {
        return json_decode(file_get_contents('php://input'));
    }
    public function setData() {
        $this->data = json_decode(file_get_contents('php://input'));
    }
    public function getData() {
        return $this->data;
    }

    
    abstract public function delete($ids);
    abstract public function loadAll();
}


