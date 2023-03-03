<?php
require_once('MySqlProducts.class.php');

class Furniture extends MySqlProducts{
    public function save() {
        $this->setSku($this->data->sku);
        $this->setName($this->data->name);   
        $this->setProductType($this->data->option);
        $this->setPrice($this->data->price);
        $this->setSpecs('Dimension:' . ' ' . $this->data->height . 'x' . $this->data->width . 'x' . $this->data->length);
        
        $smt = $this->db->prepare('INSERT INTO products (sku, name,productType,price,specs) VALUES (:sku, :name,:productType, :price,:specs)');
         try{
        $smt->execute([
            ':sku' => $this->sku,
            ':name' => $this->name,
            ':productType' => $this->productType,
            ':price' => $this->price, 
            ':specs' => $this->specs,
        ]);}catch(Exception $e){
            echo $e->getMessage();
        }
        $smt = null;
        $db = null;

    }
}