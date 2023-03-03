<?php 
require_once('MySqlProducts.class.php');

class DVD extends MySqlProducts {
    public function save() {
        $this->setSku($this->data->sku);
        $this->setName($this->data->name);   
        $this->setProductType($this->data->option);
        $this->setPrice($this->data->price);
        $this->setSpecs('Size:' . $this->data->size . 'MB');
        
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